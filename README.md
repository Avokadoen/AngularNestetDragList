# Angular sorted nested drag list 
This is an example on how to sort a nested drag list. Take care that the only reason 
this code sorts list without using the [CdkDropList](https://material.angular.io/cdk/drag-drop/api#CdkDropList)
inbuilt sort is a "flaw" in our code structure as data events is based on our node and not an array (which the list expects).

This code is **heaviliy** based on [this example](https://stackblitz.com/edit/angular-cdk-nested-drag-drop-demo) with added functionality of sort, example relations
between nodes (restrictions) and some simple coloring. 
