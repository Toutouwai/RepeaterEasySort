# Repeater Easy Sort

Adds a compact "easy-sort" mode to Repeater and Repeater Matrix, making those fields easier to sort when there are a large number of items.

The module also enhances Repeater Matrix by allowing a colour to be set for each matrix type. This colour is used in the item headers and in the "add new" links, to help visually distinguish different matrix types in the inputfield.

## Screencasts

#### A Repeater field

![res-1](https://user-images.githubusercontent.com/1538852/132089653-1e56cebe-411a-44c5-8a32-ce730634c9ed.gif)

#### A Repeater Matrix field with custom header colours

![res-2](https://user-images.githubusercontent.com/1538852/132089655-01e02396-b095-455b-ba0c-dcd03dfcfccb.gif)

## Easy-sort mode

There are two ways to enter easy-sort mode.

1\. Click the double-arrow in a Repeater item header. This activates easy-sort mode and also highlights the item with a black background so it's easier to find it in easy-sort mode.

2\. Click the horizontal ellipsis icon in the Repeater field header to activate easy-sort mode. To return to normal mode click the vertical ellipsis icon.

![Mode buttons](https://user-images.githubusercontent.com/1538852/154781102-af145c2b-51aa-43ed-aa91-08fcc533d8c8.png)

While in easy-sort mode:
* The items will reduce in width so that more items can be shown on the screen at once. The minimum width is configurable in the field settings.
* Any items that were in an open state are collapsed, but when you exit easy-sort mode the previously open items will be reopened.
* You can drag an item left/right/up/down to sort it within the items.
* You can click an item header to open the item.
* An "Exit easy-sort mode" button appears at the bottom of the inputfield.

## Configuration

In the field settings for Repeater and Repeater Matrix fields you can define a minimum width in pixels for items in easy-sort mode. While in easy-sort mode the items will be sized to neatly fill the available width on any screen size but will never be narrower than the width you set here.

If desired you can enable easy-sort mode for a field by default. Since easy-sort is then the default mode for the field no "Exit easy-sort mode" button is shown. Use the mode buttons in the field header to change between easy-sort and normal mode when needed.

![Config](https://user-images.githubusercontent.com/1538852/154781103-85eb2832-e0c9-492b-a7ce-dd4f1f55cf14.png)

In the field settings for Repeater Matrix you can define a custom header colour for each matrix type using an HTML "color" type input. The default colour for this type of input is black, so when black is selected in the input it means that no custom colour will be applied to the header.

![Matrix header colour](https://user-images.githubusercontent.com/1538852/154781183-434c66aa-5dd5-469e-a756-d3ad75cd27a0.png)

## Exclusions

The easy-sort mode is only possible on Repeater/Matrix fields that do not use the "item depth" option.
