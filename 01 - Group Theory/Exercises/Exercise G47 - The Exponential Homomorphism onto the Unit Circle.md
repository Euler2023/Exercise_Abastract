---
title: "Exercise G47: The Exponential Homomorphism onto the Unit Circle"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - homomorphisms
  - kernel
  - circle-group
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 5, Ex. 5.4, printed p. 71, PDF p. 83"
created: 2026-08-23
---

# Exercise G47: The Exponential Homomorphism onto the Unit Circle

## Problem Statement

> [!question] Exercise 5.4
> For the additive group $\mathbb R^+$, let $f(x)=e^{ix}\in\mathbb C^\times$. Prove $f$ is a homomorphism and determine its kernel and image.

## Hints

> [!hint]- Hint 1
> Use $e^{i(x+y)}=e^{ix}e^{iy}$.

## Solution

> [!success]- Solution
> The exponential identity gives
> 
> $$
> f(x+y)=e^{i(x+y)}=e^{ix}e^{iy}=f(x)f(y).
> $$
> 
> Moreover, $e^{ix}=1$ exactly when $x\in2\pi\mathbb Z$, so
> 
> $$
> \ker f=2\pi\mathbb Z.
> $$
> 
> Every complex number of absolute value $1$ is $e^{ix}$ for some real $x$, hence
> 
> $$
> \operatorname{im}f=\{z\in\mathbb C:|z|=1\}.
> $$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §5, Ex. 5.4, printed p. 71, PDF p. 83]. The solution is an independent derivation for this vault, not a solution printed in Artin.
