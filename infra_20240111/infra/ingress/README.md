# How to install and implement K8s Ingress (Cilium class), MetalLB, Nginx reverse proxy

## Enable ingressController of Cilium

Guide: https://docs.cilium.io/en/stable/network/servicemesh/ingress/#installation

```
helm upgrade cilium cilium/cilium --version 1.14.5 \
    --namespace kube-system \
    --reuse-values \
    --set ingressController.enabled=true \
    --set ingressController.loadbalancerMode=dedicated
kubectl -n kube-system rollout restart deployment/cilium-operator
kubectl -n kube-system rollout restart ds/cilium
```

## Install MetalLB

MetalLB hooks into your Kubernetes cluster, and provides a network load-balancer implementation. In short, it allows you to create Kubernetes services of type `LoadBalancer` in clusters that don’t run on a cloud provider, and thus cannot simply hook into paid products to provide load balancers.

#### MetalLB Installation

Install as MetalLB guide: https://metallb.universe.tf/installation/

#### Add MetalLB IPAddressPool

```
apiVersion: metallb.io/v1beta1
kind: IPAddressPool
metadata:
  name: production
  namespace: metallb-system
spec:
# your private IPv4s range of worker servers then we can expose the public IP to the internet later, lấy private ip của máy loadbalancer (hoặc bất kỳ máy nào trong cụm)
  addresses:
  - 172.31.23.169/32
```

#### Add MetalLB L2 Advertisement

```
apiVersion: metallb.io/v1beta1
kind: L2Advertisement
metadata:
  name: external
  namespace: metallb-system
spec:
  ipAddressPools:
  - production
```

## Apply Cilium K8s Ingress for services

```
kubectl apply -f infra/ingress/training-ingress.yaml
```

Sau khi cài xong các phần trên thì xóa controller pod của metallb-system để reset lại, sau đó truy cập file /etc/hosts lấy địa chỉ external ip mà ingress cấp để map với domain để trong ingress

## Add SSL certificate

Add your .pem and .key file to path `/etc/ssl/`

## Setup Nginx reverse proxy

Update the default-sites-enabled server

- Tạo file config mới trong folder /etc/nginx/sites-available, copy đoạn config dưới sau đó sửa server_name và ip thành ip của ingress public (có thể phải xóa config default để tránh conflict)

- Sau đó dùng lệnh sudo ln -s /etc/nginx/sites-available/your_domain /etc/nginx/sites-enabled/ để copy config sang folder sites-enabled

- Dùng lệnh sudo nginx -t để test

- restart lại nginx sudo systemctl restart nginx

- có thể dùng máy mình để test lại, truy cập vào /etc/hosts mapping external ip của loadbalancer và domain mình đã config

```
sudo nano /etc/nginx/sites-enabled/default
```

Then clean all the content of `/etc/nginx/sites-enabled/default` and replace to following

```
server {
        listen 80 default_server;
        listen [::]:80 default_server;

        listen 443 default_server ssl;
        listen [::]:443 default_server;

	    ssl_certificate /etc/ssl/test-devops4all.pem; # your .pem file
	    sl_certificate_key /etc/ssl/test-devops4all.key; # your .key file

        root /var/www/html;

        # Add index.php to the list if you are using PHP
        index index.html index.htm index.nginx-debian.html;

        server_name dotnet.devops4all.co nodejs.devops4all.co; # your domain

        location / {
		proxy_pass http://172.31.23.169/; # the server to reverse
		proxy_http_version 1.1;
                proxy_set_header Host $host;
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                # First attempt to serve request as file, then
                # as directory, then fall back to displaying a 404.
                #try_files $uri $uri/ =404;
        }
}
```

ACs

Cài đặt MetalLB hỗ trợ việc gắn IP cho các K8s Services type LoadBalancer

Dải IPs: 192.168.81.214-192.168.81.215

Nginx Ingress là resource của K8s dùng để điều khiển lưu lượng từ ngoài vào các services trong cụm k8s.

Cách cài đặt: Nginx Ingress

helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx

helm install aicycle-nginx ingress-nginx/ingress-nginx \

--set controller.metrics.enabled=true \

--set-string controller.metrics.service.annotations."prometheus\.io/port"="10254" \

--set-string controller.metrics.service.annotations."prometheus\.io/scrape"="true"
Cấu hình: File cấu hình cho ingress sample như sau

apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
name: app-aicycle

# namespace: ingress-nginx

annotations:
cert-manager.io/cluster-issuer: "letsencrypt-prod"  
 nginx.ingress.kubernetes.io/rewrite-target: /
kubernetes.io/ingress.class: nginx
nginx.ingress.kubernetes.io/proxy-body-size: 16m
spec:
tls:

- hosts:
  - stage-admin-insurance.aicycle.ai
  - stage-evaluation.aicycle.ai
  - stage.api.aicycle.ai
    secretName: aicycle-tls
    rules:
- host: stage-admin-insurance.aicycle.ai
  http:
  paths:
  - path: /
    pathType: Prefix
    backend:
    service:
    name: ai-admin-app-service
    port:
    number: 4200
- host: stage-evaluation.aicycle.ai
  http:
  paths:
  - path: /
    pathType: Prefix
    backend:
    service:
    name: valuation-app-service
    port:
    number: 3005
- host: api.aicycle.ai
  http:
  paths:
  - path: /admin(/|$)(.\*)
    pathType: Prefix
    backend:
    service:
    name: be-admin-server-service
    port:
    number: 6303
  - path: /insurance(/|$)(.\*)
    pathType: Prefix
    backend:
    service:
    name: insurance-collection-app-be-aws-prod-service
    port:
    number: 6302
- host: stage.api.aicycle.ai
  http:
  paths: - path: /admin(/|$)(.*)
        pathType: Prefix
        backend:
          service:
            name: be-admin-server-service
            port:
              number: 6303
      - path: /insurance(/|$)(.\*)
  pathType: Prefix
  backend:
  service:
  name: insurance-collection-app-be-service
  port:
  number: 6302
  Trong đó cần quan tâm đến các tham số sau:

hosts: là sub-domain cần plic

name: là name service

number: là port của name service

Khi muốn thêm 1 service expose ra ngoài thì cần thêm ở file ingress.yaml này sau đó thực hiện lệnh: kubectl apply -f ingress.yaml
