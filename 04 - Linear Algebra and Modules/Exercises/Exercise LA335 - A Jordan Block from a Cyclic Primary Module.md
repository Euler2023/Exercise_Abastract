---
title: "Exercise LA335: A Jordan Block from a Cyclic Primary Module"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - jordan-form
  - cyclic-modules
source: "Michael Artin, Algebra, 2nd ed., Ch. 14, Linear Algebra in a Ring, Section 8, Application to Linear Operators, Ex. 8.2, printed p. 440, PDF p. 452"
created: 2026-08-28
---

# Exercise LA335: A Jordan Block from a Cyclic Primary Module

## Problem Statement

> [!question] Exercise 8.2
> Let $M$ be a $\mathbb C[t]$-module of the form $\mathbb C[t]/(t-\alpha)^n$. Show that there is a $\mathbb C$-basis for $M$ such that the matrix of the corresponding linear operator is a Jordan block.

## Hints

> [!hint]- Hint 1
> Put $u=t-\alpha$ and order the basis $u^{n-1},u^{n-2},\ldots,1$.

## Solution

> [!success]- Solution
> In $M$, put $u=t-\alpha$. Then $u^n=0$, and
>
> $$
> \mathcal B=(u^{n-1},u^{n-2},\ldots,u,1)
> $$
>
> is a $\mathbb C$-basis. Multiplication by $t=\alpha+u$ satisfies
>
> $$
> t u^{n-1}=\alpha u^{n-1}
> $$
>
> and, for $j<n-1$,
>
> $$
> t u^j=\alpha u^j+u^{j+1}.
> $$
>
> Therefore its matrix in the displayed reversed-power basis is
>
> $$
> \boxed{
> \begin{pmatrix}
> \alpha&1&0&\cdots&0\\
> 0&\alpha&1&\ddots&\vdots\\
> \vdots&\ddots&\ddots&\ddots&0\\
> 0&\cdots&0&\alpha&1\\
> 0&\cdots&\cdots&0&\alpha
> \end{pmatrix},}
> $$
>
> the size-$n$ Jordan block with eigenvalue $\alpha$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Jordan Canonical Form|Jordan Canonical Form]]
- [[04 - Linear Algebra and Modules/Concepts/Cyclic Vectors and Companion Matrices|Cyclic Vectors and Companion Matrices]]

## Notes

- **Routing:** Linear Algebra is primary because a module basis becomes a Jordan chain for multiplication by $t$.
- **Source status:** [S1, Ch. 14, §14.8, Ex. 8.2, printed p. 440, PDF p. 452]. The basis calculation is independent.
