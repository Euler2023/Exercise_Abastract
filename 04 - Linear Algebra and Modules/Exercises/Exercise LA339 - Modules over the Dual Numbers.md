---
title: "Exercise LA339: Modules over the Dual Numbers"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - dual-numbers
  - nilpotent-operators
source: "Michael Artin, Algebra, 2nd ed., Ch. 14, Linear Algebra in a Ring, Section 8, Application to Linear Operators, Ex. 8.6, printed p. 440, PDF p. 452"
created: 2026-08-28
---

# Exercise LA339: Modules over the Dual Numbers

## Problem Statement

> [!question] Exercise 8.6
> Classify finitely generated modules over the ring $\mathbb C[\epsilon]$, where $\epsilon^2=0$.

## Hints

> [!hint]- Hint 1
> Regard the action of $\epsilon$ as a complex-linear operator $N$ with $N^2=0$.

## Solution

> [!success]- Solution
> Put
>
> $$
> R=\mathbb C[\epsilon]/(\epsilon^2).
> $$
>
> A finitely generated $R$-module $M$ is finite-dimensional over $\mathbb C$, because $R$ has complex dimension two. Multiplication by $\epsilon$ is a complex-linear operator
>
> $$
> N:M\to M,
> \qquad N^2=0.
> $$
>
> Its Jordan blocks therefore have size at most two. A size-two nilpotent block with basis $v,Nv$ is the free cyclic module $R v\cong R$. A size-one zero block is the simple module on which $\epsilon$ acts by zero, namely $R/(\epsilon)\cong\mathbb C$.
>
> Consequently every finitely generated module has a unique decomposition
>
> $$
> \boxed{M\cong R^r\oplus(R/(\epsilon))^s}
> $$
>
> for unique $r,s\ge0$. In terms of $N$,
>
> $$
> r=\operatorname{rank}N,
> \qquad
> s=\dim_{\mathbb C}\ker N-\operatorname{rank}N.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|Finitely Generated Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Jordan Canonical Form|Jordan Canonical Form]]
- [[02 - Ring Theory/Concepts/Nilpotent and Idempotent Elements|Nilpotent and Idempotent Elements]]

## Notes

- **Routing:** Module Theory is primary because the module action is classified through the Jordan type of the nilpotent scalar $\epsilon$.
- **Source status:** [S1, Ch. 14, §14.8, Ex. 8.6, printed p. 440, PDF p. 452]. The classification is independent.
