---
title: "Exercise LA658: Density of Irrational Circle Rotations"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 1, Section 1.6, Exercise 9, printed p. 28, PDF p. 40"
source_refs:
  - "S10/ch-1/sec-6/ex-9"
created: 2026-11-12
---

# Exercise LA658: Density of Irrational Circle Rotations

## Problem Statement

> [!question] Original Exercise 9
> Suppose $a$ is an irrational real number. Show that the set $E_a$ of numbers of the form $e^{2\pi ina}$, $n\in\mathbb Z$, is dense in the unit circle $S^1$.
>
> *Hint:* Show that if we divide $S^1$ into $N$ equally sized “bins” of length $2\pi/N$, there is at least one bin that contains infinitely many elements of $E_a$. Then use the fact that $E_a$ is a subgroup of $S^1$.

## Hints

> [!hint]- Hint 1
> Irrationality makes the points $e^{2\pi ina}$ pairwise distinct. Take the quotient of two distinct points in a sufficiently short arc.

> [!hint]- Hint 2
> After taking an inverse if necessary, obtain $e^{i\delta}\in E_a$ with $0<\delta<2\pi/N$. Integral powers of this element approximate any prescribed angle to within $\delta$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation following the printed hint.
>
> If $e^{2\pi ina}=e^{2\pi ima}$, then $(n-m)a\in\mathbb Z$. Since $a$ is irrational, this forces $n=m$. Hence $E_a$ is infinite. It is a subgroup because multiplication adds the integers $n$ and inversion replaces $n$ by $-n$.
>
> Fix a positive integer $N$. Partition the angle interval $[0,2\pi)$ into $N$ half-open intervals of length $2\pi/N$, and take their images on the circle. Since finitely many finite sets have finite union, at least one bin contains infinitely many elements of $E_a$.
>
> Choose two distinct such elements with representative angles $\theta_1,\theta_2$ in that bin. Their quotient is $e^{i(\theta_1-\theta_2)}\in E_a$, and
> $$
> 0<|\theta_1-\theta_2|<\frac{2\pi}{N}.
> $$
> By taking its inverse if necessary, we obtain an element $e^{i\delta}\in E_a$ with
> $$
> 0<\delta<\frac{2\pi}{N}.
> $$
>
> Now let $e^{i\theta}$ be any target point, with $0\le\theta<2\pi$. Set $k=\lfloor\theta/\delta\rfloor$. Then $e^{ik\delta}\in E_a$ and $0\le\theta-k\delta<\delta$. The elementary estimate $|e^{ix}-e^{iy}|=2|\sin((x-y)/2)|\le|x-y|$ gives
> $$
> |e^{i\theta}-e^{ik\delta}|
> \le|\theta-k\delta|
> <\delta<\frac{2\pi}{N}.
> $$
> For every $\varepsilon>0$, choosing $N$ with $2\pi/N<\varepsilon$ produces a point of $E_a$ within $\varepsilon$ of the target. Thus $\overline{E_a}=S^1$.

## Related Concepts

- [[01 - Group Theory/Concepts/Discrete and Dense Subgroups|Discrete and Dense Subgroups]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]

## Notes

- **Source status:** The complete exercise and its printed hint were checked on the 200 dpi original page, printed p. 28 / PDF p. 40. The proof is independently supplied.
- **Method boundary:** The argument proves density, not a rate of approximation or equidistribution. The only real-analysis inputs are the Archimedean property and $|\sin x|\le|x|$.
- **Routing:** The principal task is a density calculation in the finite-dimensional circle matrix group $S^1=U(1)$; subgroup operations supply arbitrarily small rotations.
- **Archive navigation:** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].
