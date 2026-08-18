FROM node:20-alpine AS build
WORKDIR /app
 
# Copy only package files first -> Docker caches this layer,
# so npm install only reruns when dependencies actually change
COPY package*.json ./
RUN npm install
 
# Copy the rest of the source code
COPY . .
 
# Runs "vite build" -> outputs static files into /app/dist
RUN npm run build
 
 
# ---- Stage 2: serve the built files with nginx ----
FROM nginx:alpine
 
# Clear nginx's default sample page
RUN rm -rf /usr/share/nginx/html/*
 
# Copy ONLY the built static output from Stage 1
COPY --from=build /app/dist /usr/share/nginx/html
 
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
 