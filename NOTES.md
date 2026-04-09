# Notes

## How I Structured My Components

I structured the form into separate step components (Step 1-4), a progress bar, and a Form component that handles the content rendering and nav buttons. App.jsx owns all the state and logic for the form data and the steps. I did it this way to keep everything organized and each component focused on one job. I also added a useFormValidation hook to keep validation logic in one place instead of spreading it across each step component (which caused a lot of repetition). It also made it easy to call in App.jsx to prevent continuing to the next step until the current step is valid.

## How I Managed Form State Across Steps

I centralized all form state in App.jsx using a single formData object. This is how I was able to keep all the data saved when switching back and forth between steps and when going back to Step 1 in the rejection flow. The form data never leaves App and therefore stays intact.

## How I Handled the Rejection Flow

I made it so that the first submission is always rejected to demonstrate the flow. When rejected, the app saves the rejected business name internally, clears the business name field, and sends the user back to Step 1. The validator then prevents them from reusing the same name. It also prevents them from using the same name with different casing or extra whitespace. As mentioned above, all other fields stay saved from before due to the formData object in App.jsx.

## What I Chose to Show vs. Validate vs. Track Internally

On the Step 3 review screen I show the user their business name, full name, email, and address from Step 1. The user is able to go back to Step 1 if they notice anything that needs to be changed. I left out payment status since they already confirmed it to get past Step 2, so showing it again felt redundant. I also track two internal fields that the user never sees: rejected, which determines what they see on Step 4 (rejection or success message), and rejectedBusinessName, which is used to prevent them from reusing the same name after a rejection.

## What I'd Improve With More Time

**Live validation:** 
Ideally, it would be cleaner and more user friendly to show errors as the user types instead of only showing them when they press Continue. This would make the form feel more responsive and give immediate feedback, preventing users from pressing Continue without knowing what needs to be fixed. 

**Real progress bar:**
I would have also liked to replace the text indicator with an actual visual bar. It would have been more clear to the user and just looked better overall.

**Better error styling:**
I would have highlighted the input border in red instead of just showing text below. This especially matters in the rejection flow, when the user is sent back to Step 1. Even though the business name field is cleared, there's no red error indication unless they try to click Continue. It would be better to have the red error message already be visible right when they land back on the page. This also ties into adding live validation, which would also solve this problem. 
