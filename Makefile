build:
	docker build -t qr-code-component .

run:
	docker run -p 3000:3000 qr-code-component