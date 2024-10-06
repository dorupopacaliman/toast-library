# React Toast Library

This mini project demonstrates how to create a toast library leveraging React Context and custom hooks. The library provides a simple and flexible way to display toast notifications in a React application.

## Features

- Display toast notifications with customizable options
- Position toasts in different corners of the screen
- Auto-dismiss toasts after a specified timeout
- Manually dismiss toasts by clicking on them
- Easy integration with React applications

## Implementation Details

The toast library is built using the following key components:

1. **ToastProvider**: A React context provider that manages the state of toasts and provides methods to add and remove toasts.

2. **useToast**: A custom hook that allows components to easily access the toast functionality.

3. **ToastContainer**: A component that renders the toasts in the specified positions.

## Key Files

- `src/ToastProvider.tsx`: Implements the ToastProvider component and context
- `src/useToast.ts`: Defines the useToast custom hook
- `src/common.ts`: Contains shared types and enums
- `src/styles.css`: Provides styling for the toast components

## Usage

To use the toast library in your React application:

1. Wrap your main application component with the `ToastProvider`:
2. Use the `useToast` hook in your components to add toasts:
3. Customize the appearance and behavior of toasts using the provided options.

## Customization

You can customize the appearance of toasts by modifying the CSS in `src/styles.css`. The library supports different positions for toasts, which can be specified when adding a new toast.

## Conclusion

This mini project showcases how to create a flexible and reusable toast library using React's context API and custom hooks. It provides a solid foundation for building more advanced notification systems in React applications.