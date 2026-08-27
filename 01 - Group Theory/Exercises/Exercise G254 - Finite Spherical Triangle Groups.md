---
title: "Exercise G254: Finite Spherical Triangle Groups"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 11, Ex. 11.6, printed p. 226, PDF p. 238"
created: 2026-08-27
---

# Exercise G254: Finite Spherical Triangle Groups

## Problem Statement

> [!question] Exercise 11.6
> For $G^{pqr}=\langle x,y,z:x^p=y^q=z^r=xyz=1\rangle$, prove the cases $(2,2,n)$, $(2,3,4)$, $(2,3,5)$ are respectively $D_n$, the octahedral group, and the icosahedral group.

## Hints

> [!hint]- Hint 1
> Eliminate $z$ and compare with rotations of a spherical triangle.

## Solution

> [!success]- Solution
> Eliminating $z=(xy)^{-1}$ gives $\langle x,y:x^p=y^q=(xy)^r=1\rangle$. For $(2,2,n)$ this is the standard dihedral presentation. For $(2,3,4)$ and $(2,3,5)$, rotations about vertices of spherical triangles with angles $\pi/2,\pi/3,\pi/4$ and $\pi/2,\pi/3,\pi/5$ give surjections onto the octahedral and icosahedral rotation groups. Todd–Coxeter enumeration gives upper bounds $24$ and $60$ respectively; the geometric images have those orders, so the maps are isomorphisms. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange Theorem]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]

## Notes

- **Source status:** [S1, Ch. 7, §11, Ex. 11.6, printed p. 226, PDF p. 238]; relations and numbering visually checked against the source PDF; solution independently derived. Exercise 11.8 is correctly numbered in the PDF although OCR repeats “11.5”.

