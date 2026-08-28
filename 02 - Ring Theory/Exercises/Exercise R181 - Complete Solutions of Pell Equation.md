---
title: "Exercise R181: Complete Solutions of Pell's Equation"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - pell-equation
  - quadratic-fields
source: "Michael Artin, Algebra, 2nd ed., Ch. 13, Quadratic Number Fields, Section 9, Real Quadratic Fields, Ex. 9.2, printed p. 411, PDF p. 423"
created: 2026-08-28
---

# Exercise R181: Complete Solutions of Pell's Equation

## Problem Statement

> [!question] Exercise 9.2
> Determine the solutions of the equation $x^2-y^2d=1$ when $d$ is a positive integer.

## Hints

> [!hint]- Hint 1
> Separate the case in which $d$ is a square. Otherwise interpret $x+y\sqrt d$ as a norm-one unit.

> [!hint]- Hint 2
> Among the positive solutions greater than $1$, choose the least one $\varepsilon_d$ and use division by its powers.

## Solution

> [!success]- Solution
> If $d=m^2$ is a square, then
>
> $$
> (x-my)(x+my)=1.
> $$
>
> Both factors are integers, so they are both $1$ or both $-1$. Thus the only solutions are
>
> $$
> \boxed{(x,y)=(1,0),(-1,0).}
> $$
>
> Now suppose that $d$ is not a square. Let
>
> $$
> \varepsilon_d=x_1+y_1\sqrt d>1
> $$
>
> be the least positive unit of norm $1$ greater than $1$, where $x_1,y_1$ are positive integers. Pell's theorem guarantees that such a nontrivial solution exists.
>
> Every power has the form
>
> $$
> \varepsilon_d^n=x_n+y_n\sqrt d
> $$
>
> with $x_n,y_n\in\mathbb Z$ and $x_n^2-dy_n^2=1$. Conversely, let $\alpha=x+y\sqrt d$ be any solution. After multiplying by $-1$ and, if necessary, replacing $\alpha$ by its inverse $x-y\sqrt d$, we may assume $\alpha\ge1$. Choose $n$ such that
>
> $$
> \varepsilon_d^n\le\alpha<\varepsilon_d^{n+1}.
> $$
>
> Then $\alpha\varepsilon_d^{-n}$ is another positive norm-one unit in $[1,\varepsilon_d)$. By the minimal choice of $\varepsilon_d$, it must equal $1$. Therefore the complete solution set is
>
> $$
> \boxed{x+y\sqrt d=\pm\varepsilon_d^n\qquad(n\in\mathbb Z).}
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Units in Real Quadratic Fields|Units in Real Quadratic Fields]]
- [[08 - Arithmetic Geometry/Concepts/Diophantine Equations|Diophantine Equations]]

## Notes

- **Routing:** Ring Theory is primary because the solution set is the norm-one subgroup of the unit group.
- **External standard input:** Existence of a nontrivial solution for every positive nonsquare $d$ is the classical Pell theorem. The classification from a least solution is proved in the note.
- **Source status:** The problem is from [S1, Ch. 13, §13.9, Ex. 9.2, printed p. 411, PDF p. 423].
