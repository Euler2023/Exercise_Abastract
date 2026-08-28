---
title: "Exercise LA330: Presentation of a Nonprincipal Quadratic Ideal"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - presentations
  - quadratic-ideals
source: "Michael Artin, Algebra, 2nd ed., Ch. 14, Linear Algebra in a Ring, Section 5, Generators and Relations, Ex. 5.1, printed p. 438, PDF p. 450"
created: 2026-08-28
---

# Exercise LA330: Presentation of a Nonprincipal Quadratic Ideal

## Problem Statement

> [!question] Exercise 5.1
> Let $R=\mathbb Z[\delta]$, where $\delta=\sqrt{-5}$. Determine a presentation matrix as an $R$-module for the ideal $(2,1+\delta)$.

## Hints

> [!hint]- Hint 1
> Use generators $v_1=2$ and $v_2=1+\delta$, and look for the relations obtained from $2(1+\delta)$ and $(1-\delta)(1+\delta)=6$.

## Solution

> [!success]- Solution
> Let
>
> $$
> \pi:R^2\longrightarrow I=(2,1+\delta),
> \qquad
> (a,b)\longmapsto2a+(1+\delta)b.
> $$
>
> The two columns
>
> $$
> r_1=\begin{pmatrix}1+\delta\\-2\end{pmatrix},
> \qquad
> r_2=\begin{pmatrix}3\\\delta-1\end{pmatrix}
> $$
>
> are relations, because
>
> $$
> 2(1+\delta)-2(1+\delta)=0
> $$
>
> and
>
> $$
> 6+(\delta-1)(1+\delta)=6+(\delta^2-1)=0.
> $$
>
> Conversely, writing the coefficients of a relation in the basis $1,\delta$ and eliminating its four integer coordinates shows that it is an $R$-linear combination of $r_1,r_2$. Hence a presentation matrix is
>
> $$
> \boxed{
> A=\begin{pmatrix}
> 1+\delta&3\\
> -2&\delta-1
> \end{pmatrix},
> \qquad
> R^2\xrightarrow{A}R^2\xrightarrow{\pi}I\to0.}
> $$
>
> Its determinant is zero, as required for a rank-one module:
>
> $$
> (1+\delta)(\delta-1)+6=\delta^2+5=0.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|Finitely Generated Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Module Homomorphisms|Module Homomorphisms]]
- [[02 - Ring Theory/Concepts/Ideal Classes and Class Groups|Ideal Classes and Class Groups]]

## Notes

- **Routing:** Module Theory is primary because generators and their syzygies define the requested presentation.
- **Computational verification:** The two relations and zero determinant were checked using $\delta^2=-5$; the kernel-generation claim follows by an exact coefficient comparison in the free abelian basis $1,\delta$.
- **Source status:** [S1, Ch. 14, §14.5, Ex. 5.1, printed p. 438, PDF p. 450].
