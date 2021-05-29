# Airtable timeline assignment

## Expected implementation time:

4 hours

## High level objective:

Design and implement a component for visualizing items on a timeline.

## Details:

Your timeline component should arrange items in horizontal lanes. These items should be laid out in a compact, space-efficient way: if item A ends before item B starts, they can share a lane instead of being rendered on separate lanes. You may want to slightly relax this constraint to fit in the name of the event (for example, if an item is too short, or the item’s name is too long).

The start and end dates will be formatted as YYYY-MM-DD date strings, for example: `2020-02-20`. You don’t need to worry about hours, minutes, seconds, or time zones. You can assume every item’s end date is the same or later than its start date.

To help you implement the compact lanes, we’ve provided you with `src/assignLanes.js`. Feel free to modify and use this code however you like.

You are welcome to use general purpose libraries (Moment, UI primitive libraries, etc.), but you should avoid using libraries that solve too much of the problem (i.e. renders a timeline).

In addition to rendering the timeline, use whatever time you have remaining to implement any of the following enhancements:

-   Allow zooming in and out of the timeline
-   Allow dragging and dropping to change the start and/or end date of an item
-   Allow editing the name of items inline
-   Any other polish or useful enhancements you can think of

The HackerRank test timer is set to 2 weeks so that you can pause & resume work on the project as needed, but we expect the actual project to be scoped to ~4 hours. Feel free to submit as soon as you've finished.

Include a README that covers:

-   How long you spent on the assignment.
-   What you like about your implementation.
-   What you would change if you were going to do it again.
-   How you made your design decisions. For example, if you looked at other timelines for inspiration, please note that.
-   How you would test this if you had more time.

If you did not use the starter code, please also include instructions on how to build and run your project so we can see and interact with the timeline component you built. It should render the sample data included in `src/timelineItems.js`.

What we’re looking for:

-   Clean, readable, maintainable code.
-   A sensible user experience and design for the final product.

## Starter code:

You can develop your Timeline either in the HackerRank Web IDE, or using your own local environment. To help keep our review process anonymous, please do not include any personally identifiable information (such as your name) in your submitted code.

If using the HackerRank Web IDE:

1. Select "Run > Run" to start the local development server. This may take up to a minute to complete - you can see progress in the terminal window at the bottom of the screen.
2. Once the app is running, select "Run > Open Preview" to view the project in a side panel. Alternatively, you can copy paste that URL into a separate browser tab.
3. Develop directly inside the Web IDE
4. Submit via HackerRank UI

Note: There are not any tests configured in the starter code, so "Run > Test" won't do anything.

If using your own environment:

1. Clone the provided repository URL (`git clone <URL>`)
2. Navigate to this project directory
3. Run `npm install` to install dependencies (this takes a couple minutes)
4. Run `npm start` to initialize and connect to a node server with your default browser
5. Develop in your own local environment
6. Run `git push` to the `master` branch to push your changes up to HackerRank
7. Once finished, make sure your latest code is pushed up, then submit via HackerRank UI

Please feel free to use as much or as little of the starter code as you'd like.

## Sample data:

The `src/timelineItems.js` file has some sample data you can use to get started.
