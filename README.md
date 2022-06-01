
# Gallery

This app should allow the user to Add and, Delete a photo, as well as View list of photos.

Requirements for docker:
- Docker

## How to run the frontend with docker
Using the terminal

1. Run `docker build -t sample:dev .`

2. To create a docker container
```
    docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    sample:dev
```

3. Go to `http://localhost:3001` to view the app


===========================

Requirements for local run:
- Node
- npm

## How to run the frontend locally
Using the terminal

1. Go to the frontend folder

    `cd frontend`

2. Install dependencies

    `npm install`

3. Run by

    `npm start`

4. Go to `http://localhost:3000/gallery` play with the app.
    
==============================

## Where do my photos come from?

- [Lorem Picsum](https://picsum.photos/)
    - We make use of this endpoint to view a list of photos.
        `https://picsum.photos/v2/list`
    - It should return these values:
        ```
        [
            {
                "id": "0",
                "author": "Alejandro Escamilla",
                "width": 5616,
                "height": 3744,
                "url": "https://unsplash.com/...",
                "download_url": "https://picsum.photos/..."
            }
        ]
        ```


Enjoy!
