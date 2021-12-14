---
title: 'Electrical'
metaDesc: 'Electrical systems'
displayOrder: 2
hero: '/images/how/sprint-1.jpg'
heroAlt: 'Sprint 1 prototype'
summary: The things we powered.
---

# Components

- 8x [Pololu 12v Motors](https://www.pololu.com/product/3227)
- 8x [InduSKY Micro Limit
  Switch](https://www.amazon.com/InduSKY-Switch-Momentary-Roller-Switches/dp/B08736NP44/ref=asc_df_B08736NP44/?tag=hyprod-20&linkCode=df0&hvadid=475843397258&hvpos=&hvnetw=g&hvrand=7643850205685222884&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9002079&hvtargid=pla-974750520630&psc=1)
- 1x [Arduino Uno Rev3](https://store.arduino.cc/products/arduino-uno-rev3/)
- 2x [Adafruit Motor Shield v2.3](https://www.adafruit.com/product/1438)

# Circuit diagram

![placeholder](/images/what/circuit.png)

# Overview

Our electrical system is relatively simple with the majority of control coming from the
Arduino. The two motor shields are stacked on top of the base Arduino board, and each
motor is connected to one of the 8 ports on the motor shields. The limit switches are
all connected to the ground of the base board, and then are spread across the Arduino's
digital input pins. Each switch also utilizes an internal Arduino pull-up resistor.
