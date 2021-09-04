# Repeater Easy Sort

Adds a compact "easy-sort" mode to Repeater and Repeater Matrix, making those fields easier to sort when there are a large number of items.

The module also enhances Repeater Matrix by allowing a colour to be set for each matrix type. This colour is used in the item headers and in the "add" links, to help visually distinguish different matrix types in the inputfield.

## Easy-sort mode

Each Repeater/Matrix item gets an double-arrow icon in the item header. Click this icon to enter easy-sort mode.

While in easy-sort mode:
* The items will reduce in width so that more items can be shown on the screen at once. The minimum width is configurable in the field settings.
* Any items that were in an open state are collapsed, but when you exit easy-sort mode the previously open items will be reopened.
* You can drag an item left/right/up/down to sort it within the items. 
* The item that you clicked the icon for is shown with a black background. This makes it easier to find the item you want to move in easy-sort mode.
* You can click an item header to open the item.
* An "Exit easy-sort mode" button appears at the bottom of the inputfield.

## Configuration

In the field settings for Repeater and Repeater Matrix fields you can define a minimum width in pixels for items in easy-sort mode. While in easy-sort mode the items will be sized to neatly fill the available width on any screen size but will never be narrower than the width you set here.

In the field settings for Repeater Matrix you can define a custom header colour for each matrix type using an HTML "color" type input. The default colour for this type of input is black, so when black is selected in the input it means that no custom colour will be applied to the header.

## Screencasts

#### A Repeater field

![res-1](https://user-images.githubusercontent.com/1538852/132089653-1e56cebe-411a-44c5-8a32-ce730634c9ed.gif)

#### A Repeater Matrix field with custom header colours

![res-2](https://user-images.githubusercontent.com/1538852/132089655-01e02396-b095-455b-ba0c-dcd03dfcfccb.gif)

## Exclusions

The easy-sort mode is only possible on Repeater/Matrix fields that do not use the "item depth" option.
