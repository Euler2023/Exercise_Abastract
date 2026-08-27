---
title: "Exercise G255: Reflections in an Equilateral Triangle Generate a Triangle Group"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 11, Ex. 11.7, printed p. 226, PDF p. 238"
created: 2026-08-27
---

# Exercise G255: Reflections in an Equilateral Triangle Generate a Triangle Group

## Problem Statement

> [!question] Exercise 11.7
> Let $a,b,c$ be reflections in the three sides of an equilateral triangle and set $x=ab$, $y=bc$, $z=ca$. Prove $x,y,z$ generate a triangle group.

## Hints

> [!hint]- Hint 1
> Products of reflections in lines meeting at $60^\circ$ are rotations of order $3$.

## Solution

> [!success]- Solution
> Each of $x,y,z$ is a rotation through $120^\circ$, so $x^3=y^3=z^3=1$. Also
>
> $$
> xyz=(ab)(bc)(ca)=a b^2 c^2 a=a^2=1.
> $$
>
> Thus the generated group is a quotient of the triangle group $G^{3,3,3}$. Conversely the three displayed rotations are the generators in question, so they realize that triangle-group presentation for the orientation-preserving triangular-lattice symmetry group. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange Theorem]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]

## Notes

- **Source status:** [S1, Ch. 7, §11, Ex. 11.7, printed p. 226, PDF p. 238]; relations and numbering visually checked against the source PDF; solution independently derived. Exercise 11.8 is correctly numbered in the PDF although OCR repeats “11.5”.
