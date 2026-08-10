---
title: "Exercise F20: Visualizing Polynomial Images of Circles"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - fundamental-theorem-of-algebra
  - computation
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Section 10, Ex. 10.4, printed p. 475, PDF p. 487"
created: 2026-08-10
figures:
  - "Attachments/artin-algebra-2e-ch15-ex10.4-polynomial-circle-images.png"
---

# Exercise F20: Visualizing Polynomial Images of Circles

## Problem Statement

> [!question] Exercise
> Write a computer program to illustrate the variation of $f(C_r)$ with $r$.

## Hints

> [!hint]- Hint
> Sample $z=re^{i\theta}$ densely. Compare radii on both sides of the moduli of roots of $f$ to see changes in winding about the target origin, and on both sides of the moduli of roots of $f'$ to see changes in the curve's visible loop structure.

## Solution

> [!success]- Solution
> The archived program is executed by the Sage Python interpreter in WSL. It draws six images of $f(C_r)$ for
> $$
> f(z)=z^3-3z+1
> $$
> at radii $0.35,0.75,1,1.15,1.5,2.2$. Since $f'(z)=3(z^2-1)$, the unique critical radius is $1$; the panel at $r=1$ marks the critical values $f(1)=-1$ and $f(-1)=3$.
>
> The reason for studying these image curves is Artin's circle-image proof of the Fundamental Theorem of Algebra: for small $r$, $f(C_r)$ has winding number $0$ about the target origin, while for large $r$ it has winding number equal to $\deg f$. See [[03 - Field Theory/Concepts/Algebraic Closure#Artin's Circle-Image Proof of the Fundamental Theorem of Algebra|Artin's circle-image proof]] for the source-grounded argument and its topological input.
>
> The reusable generator is [[Attachments/artin-algebra-2e-ch15-ex10.4-polynomial-circle-images.py|this Sage Python script]]. Change `COEFFICIENTS` and `RADII` to study another polynomial.

## Generated Visualization

![[Attachments/artin-algebra-2e-ch15-ex10.4-polynomial-circle-images.png]]

The blue curve in each panel is $\theta\mapsto f(re^{i\theta})$ in the value plane, and the black point is the target origin. The root radii are approximately $0.347296$, $1.532089$, and $1.879385$; at those radii the blue curve passes through the black point and its winding number about $0$ can change. The different radius $r=1$ is the critical radius at which the tangent can vanish and the visible loop structure can change.

The image is a computational visualization generated with SageMath 9.0 under WSL. It is not source artwork from Artin.

## Related Concepts

- [[03 - Field Theory/Concepts/Algebraic Closure|Algebraic Closure]]
- [[03 - Field Theory/Exercises/Exercise F19 - Loop Changes in Polynomial Images of Circles|Exercise F19]]

## Notes

The program is a numerical visualization, not a proof of the Fundamental Theorem of Algebra. Its exact input is the coefficient list $(1,0,-3,1)$, $2400$ angular subintervals, and the six radii listed above. The circle-image proof itself is presented by Artin in outline at [S1, Ch. 15, §15.10, printed pp. 471–472, PDF pp. 483–484]. The loop transition at $r=1$ illustrates, but does not prove, the independently supplied turning-number calculation in Exercise F19.
