## Technologies
 - Next.js
 - React.js
 - CSS modules
 - Redis DB using Upstash integration
 - Vercel cloud services

## Usage
1.- Install deps
```bash
npm install
```
2.- Add a file named `.env` at root level containing:
```bash
REDIS_URL="<DB ACCESS KEY>"
```
3.- Run the server
```bash
npm run dev
```
4.- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Backend endpoints
 - [http://localhost:3000/api/tasks](http://localhost:3000/api/tasks). This endpoint can be edited in `pages/api/tasks/index.js`.
 - [http://localhost:3000/api/tasks/:taskId](http://localhost:3000/api/tasks/:taskId). This endpoint can be edited in `pages/api/tasks/[taskId].js`.
  
## Frontend
Just browse to [http://localhost:3000/](http://localhost:3000/)
  
## Production
This repo has continuous integration with Vercel, every commit pushed to master will trigger a deploy
You can browse the production site @ [https://nextjs-redis-todo.vercel.app/](https://nextjs-redis-todo.vercel.app/)

## For ease of understanding of how task are created, deleted and stored
- This happens inside this endpoint: [http://localhost:3000/api/tasks](http://localhost:3000/api/tasks)
![Screen Shot 2022-05-20 at 11 31 52](https://user-images.githubusercontent.com/8002535/169550763-0774e577-8f41-498c-b8f7-f9c8b013f197.png)

