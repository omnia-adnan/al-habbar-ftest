# React JS Test

## Getting Started

Follow the steps below to set up and run the application.

### Installation

Run the following command to install dependencies:

```sh
npm install
```

### Start the Application

To start the development server, run:

```sh
npm start
```

## Task Description

### Overview

The aim of this task is to submit a form containing the following fields:

- **Name**
- **Email**
- **Address**
- **Phone Number**

The form is split into two sections:

- **Name and Email** are entered directly in the form.
- **Address and Phone Number** are entered in a modal, which is opened by clicking the "Open Modal" button.

### Manual Submitting

Implement a function `manualSubmit()` where the user:

1. Fills in the **name** and **email** fields.
2. Opens the modal and fills in the **address** and **phone number**.
3. Clicks the "Manual Submit" button.

#### Expected Behavior:

- A new card is generated.
- The submission type should be **"Submitted Manually"**.
- The card should display the values of the four input fields (**name, email, address, and phone number**) as shown in the provided picture..

### Automatic Submitting

Implement a function `autoSubmit()` that:

- Fetches data (**name, email, address, and phone number**) from `mockData.js`.
- Displays the fetched data in a new card.

#### Expected Behavior:

- A new card is generated.
- The submission type should be **"Submitted Automatically"**.
- The card should display the fetched values (**name, email, address, and phone number**) as shown in the provided picture.

---

Complete the implementation and ensure the form and modal work correctly to generate cards based on manual and automatic submission methods.
