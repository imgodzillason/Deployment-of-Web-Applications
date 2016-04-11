# Portfolio Deployment Plan

This deployment plan outlines the process of putting my site onto the live server using Git

*The assumption for this plan is its use with a single HTML page. For more complex sites, the recommendation is to use additional branches in order to merge as needed.*

1. Save changes to local repository

2. Commit changes to Git repository
    * **git commit -a** to commit all files.
        * **This will save all changes in the directory.**
    * **git commit -m "Commit message here"** to commit the staged snapshot and add commit message.
    * Use **git add** to select specific files to commit

3. **Push** changes to the  **Staging Server**

4. **Test** the site
    * This ensures the site runs as it did on the local repository. 
    * For any errors, return to **step 1** and fix errors before following the steps again

5. After testing has completed and code functions correctly, **push** changes to **Production**