import json
from flask import Flask, redirect, url_for, render_template
from assets_blueprint import assets_blueprint

# primary information comes from https://dev.to/tylerlwsmith/build-a-vite-5-backend-integration-with-flask-jch

app = Flask(
    __name__,
    template_folder="templates",
    static_folder="public",
    static_url_path="/",
)
app.config["TEMPLATES_AUTO_RELOAD"] = True
app.register_blueprint(assets_blueprint)

@app.route("/")
def homepage():
    return render_template("about.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/cv")
def cv():
    return render_template("cv.html")

@app.route("/research")
def research():
    return render_template("research.html")

@app.route("/projects")
def projects():
    return render_template("projects.html")

@app.route("/media")
def media():
    return render_template("media.html")

@app.route("/admin/")
def admin():
    return redirect(url_for("user", name="ADMIN"))

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
    server = Server(app.wsgi_app)
    server.serve(port=2200, host="0.0.0.0")
