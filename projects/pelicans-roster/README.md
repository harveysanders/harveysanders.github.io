<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

To Install this project

    os install

and select `pelicans-roster`.

You just [learned about arrays](https://docs.google.com/presentation/d/1jh1grFWZRsheklfBtuPnr4l3nVPNYXp0DNiVIXypuQo/edit?usp=sharing) and how to use their `map` function. Time to try and put that to some use!

A lot of time when you have some data it is helpful to have different ways of displaying it. Well in this application, we have some data! Open `index.html` and try running the application, opening a new tab and opening the console. In there type

     pelicans

And you will see some data on the current pelicans roster. Click the expander icons to explore this array of objects.

Ok, time to get started. See those controls at the top? Let's get these working.

# Show player names

Start by enabling the first input by removing the `disabled` attributed from 

	<input type="radio" name="whatToShow" value="names" disabled >

You will now be able to click it.

When any button value changes this function will be triggered. It should go through all `pelicans` and create a new array. This new array will be *just* strings each of which will be an item that will be put into the output list.

Start by finding the `TODO 1` marker in the `getDisplayedPlayerStrings` javascript function. We have the `pelicans` (array) variable and the `displayType` (string) variable available to us. Start by checking if the `displayType` is equal to `"name"`. If it is you should call `map` on the `pelicans` array with `getName` as an argument. Put the results into the `displayStrings` variable.

When you run the application and click the first radio button you should now see the some outputs to the console. To get the display working you need to find the `TODO 2` marker and implement the `getName` function.

# Show player names and numbers

Let's get the second radio button working. As before, remove the `disabled` attribute.

Inside of `getDisplayedPlayerStrings`, if the `displayType` is equal to `"name-number"` then `map` the `pelicans` array with `getNameAndNumber`. *Do you know where `"name-number"` came from? Find where else it appears on this page.*

Now find the `TODO 3` marker. Implement this method. Note that you might be surprised at the results. While in the examples we did earlier, we did `player["jerseyNumber"]` to get the number, it's not the same here. How do we find what the correct name for the property should be?

Also note that you will have to concatenate strings (eg `"foo" + " - " + " bar"`). Make sure your output matches what shows up in the radio button description.

Try switching between the two enabled radio buttons, do you see the output change immediately?

# Show player wins and names

One more time, get the third radio button working.

# Show player id, name, and position

The fourth one is a bit harder, we didn't create a function for you and you have to display more data. We think you can do it yourself at this point.

Try toggling between the enabled radio buttons, see the display updated in real time!

# Sort alphabetically

We're going to learn about another array function, this one isn't as useful as `map` but it will still come up every once in a while. Start by enabling the checkbox in the html.

Now look at the `updateDisplay` function. Take some time to understand and explain to your partner what it does. Call an instructor over to explain it to you if you don't get it fully.

Sorting an array of strings alphabetically is very easy.

     var sortedArrayOfStrings = arrayOfStrings.sort();

Find the `TODO 6` marker. Write some code to sort `stringsToDisplay` if `shouldSort` is true. Assign the results to `stringsToDisplay`.

Play around with the UI. You should now be able to sort the display by checking that box.

# Bonus 1 - Display players with no jersey number properly

You might note that some players (like *Darius Miller*) haven't played enough to have a jersey number assigned. Their display looks wierd when the second option is selected. See if you can figure out how to fix that so that it displays something like

    Darius Miller - (no number)
    
