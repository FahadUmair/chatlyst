# ChatLyst - A Chatbot

Let's discuss how to run both the Frontend and the Backend

## Frontend

- Make sure you have Node.js installed
- Download the `chatlyst-frontend` folder.
- Navigate to the directory inside the terminal and run `npm ci` to install the dependencies.
- The Final step is to type `npm start` to start the application.


## Backend

- Make sure you have Python installed. Any version above 3.7 works.
- Download the `chatlyst-backend` folder.
- Navigate to the directory inside the terminal and run the virtual environment first.
- Create a virtual environment by typing `python -m venv .venv` or `python3 -m venv .venv` depending upon the version of Python you have.
- Now activate the virtual environment by typing `source .venv/bin/activate`.
- Check if the virtual environment is active by typing `which python`.
- We are now done with setting up the virtual environment. If you are facing issues so far, please visit [https://fastapi.tiangolo.com/virtual-environments/#activate-the-virtual-environment].
- Now install FastAPI by typing `pip install "fastapi[standard]"` in the terminal.
- Finally, run the application by typing `fastapi dev main.py`.
- The server will be up and running.


Now, you can go back to the frontend application and test it out.

Really looking forward to the feedback!
