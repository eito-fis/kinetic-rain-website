---
title: 'Sprint 1'
metaDesc: 'Sprint 1 description'
displayOrder: 2
summary: |
  With our initial idea in place, we set out to throw together a MVP that used the
  materials we found and demonstrated the mechanism we wanted.
hero: '/images/how/sprint-1/sprint-1.jpg'
heroAlt: 'Sprint 1 prototype'
---
# Goals

## Mechanical Goals

- Test with found materials
- Build a single axle
    - Build a motor mount
    - Build a shaft
    - Build several pulleys

## Software Goals

- Write simulation to test designs
- Test computer vision algorithms
- Write basic control code

# Deliverables

## Simulation


<div class="centered-image">
  <img src="/images/how/sprint-1/simulation.gif" alt="Simulation GIF" />
</div>

[The simulation](https://openprocessing.org/sketch/1332951) was finished in the first
week of the sprint.  We didn't know exactly what kind of motion we were going for, so
the simulation was designed with modularity in mind. The ability to tweak the physical
parameters allowed us to test our different behaviors and find a final design that we
were happy with.

## MVP

<div class="centered-image">
  <video src="/videos/sprint-1.webm" preload='metadata' loop controls muted></video>
</div>

Our integration test was also successful. The visit to the recycling center yielded a
ton of usable materials, including a golf shaft, several street signs, a baby gate and
some wood. Once put together, we had a simple, scaled down model of our final product.
We also integrated the software we had done so far - the MVP was hooked up to the
Arduino, which in turn was driven by our Python script running a neural net for person
detection. With this test done, we proved that both our mechanical and software systems
were feasible.
