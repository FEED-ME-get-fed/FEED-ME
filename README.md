# FEED-ME

## Summary
"Feed." is a social media website for food lovers who want to find new and share recipes with others.  This full-stack application provides users recipe lists based on search criteria and filters.  Data is both ingested from an API and stored within a database for quicker access.  Users can save recipes to their profile, create new recipes to share with others, or make new recipes based on older versions.

## Goals 
#### Data Management
- [X] Access recipe data from Spoonacular Application Programming Interface (API)
- [X] Store recipe data in application's DB using Spring Data Java Persistence API (JPA)
- [X] Filter DB data within the view portion of the application
- [X] Add new recipe and user data to the DB
- [X] Edit recipe/user data from the DB
- [X] Delete recipe/user data from the DB
- [X] Incorporate relational tables within the DB through likes, favorites, and user comments
- [X] Include additional APIs such as FileStack and Unsplash

#### Mobile 
- [X] Ensure UI experience is unbroken during mobile browsing
- [X] Remove secondary items form mobile view or provide other means to access them

## Challenges 
- [X] Updating DB and View without screen refresh:
  Sending data from user to the DB using AJAX while also incorporating JS to update the page with visual acknowledgement of successful action (example: heart icon changes to filled when user updates a like on a recipe)
- [X] Editing Existing Recipe: 
  Managing relational tables (children) when primary (parent) is needed to be updated or modified.
- [X] Adding Unknown Number of Inputs in Form:
  Creating a recipe required finding a way to let the user input as many ingredients within their instructions as needed.  This was done by creating a secondary pop-up form that asks the user for their ingredient and ammount.  Each time an ingredient is created, we added it to a string seperated by specific characters.  Later, these strings were pared into arrays and combined to form separate ingredients.  
- [X] Deleting User:
  User profiles can be deleted while the relational children tables retain their data

## Current View or Website
#### Splash Page
![](ReadMeDir/Capstone_SplashPage.gif)

#### Main Feed
![](ReadMeDir/Capstone_Feed.gif)

#### Main Feed with API Call
![](ReadMeDir/Capstone_Feed02.gif)

#### Edit Profile
![](ReadMeDir/Capstone_EditProfile.gif)

#### Comments
![](ReadMeDir/Capstone_Comments.gif)




## Database Design:
<img width="750" height="400" alt="Database Design(approved)" src="https://user-images.githubusercontent.com/80545434/171942400-10beda18-346b-4c80-a240-bb3db2e2ffeb.png">
