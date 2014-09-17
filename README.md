```
git clone https://github.com/kaishiro/template-middleman.git www

rm -rf .git

git init

git config user.name "Matthew White"

git config user.email "matt@substructu.re"

git add .

git commit -m "Initial Commit"

# Create repo on Github | Bitbucket

git remote add [github | bitbucket] [https://github.com... | https://bitbucket.org...]

git push [github | bitbucket] master

heroku apps:create SITE-NAMESPACE

heroku config:set BUILDPACK_URL=https://github.com/kaishiro/heroku-buildpack-multi.git

# Create any additional config vars on Heroku

git push heroku master
```
