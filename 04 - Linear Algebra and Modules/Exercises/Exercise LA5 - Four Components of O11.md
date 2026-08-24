---
title: "Exercise LA5: Four Components of O11"
aliases:
  - "Exercise LA5: Four Components of O(1,1)"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-groups
  - lorentz-groups
  - path-connectedness
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 1, Ex. 1.4, printed p. 283, PDF p. 295"
created: 2026-08-10
---

# Exercise LA5: Four Components of O11

## Problem Statement

> [!question] Exercise 1.4
> Describe the group $O_{1,1}$ by equations and show that it has four path-connected components.

## Hints

> [!hint]- Hint 1
> Put $P=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ into $P^{\mathsf T}\operatorname{diag}(1,-1)P=\operatorname{diag}(1,-1)$.

> [!hint]- Hint 2
> Compare $P^{-1}=(\det P)^{-1}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}$ with $I_{1,1}P^{\mathsf T}I_{1,1}$.

> [!hint]- Hint 3
> Parametrize $a^2-b^2=1$ using $a=\pm\cosh t$ and $b=\pm\sinh t$.

## Solution

> [!success]- Solution
> Let
> $$
> P=\begin{pmatrix}a&b\\c&d\end{pmatrix},
> \qquad
> I_{1,1}=\begin{pmatrix}1&0\\0&-1\end{pmatrix}.
> $$
> Multiplying out $P^{\mathsf T}I_{1,1}P=I_{1,1}$ gives
> $$
> a^2-c^2=1,\qquad b^2-d^2=-1,qquad ab-cd=0.
> $$
> Taking determinants shows $(\det P)^2=1$. Put $\delta=\det P\in\{1,-1\}$. The defining equation also gives
> $$
> P^{-1}=I_{1,1}P^{\mathsf T}I_{1,1}
> =\begin{pmatrix}a&-c\\-b&d\end{pmatrix}.
> $$
> Comparing this with the usual inverse formula yields
> $$
> c=\delta b,qquad d=\delta a.
> $$
> Hence $a^2-b^2=1$, and every element of $O_{1,1}$ can be written uniquely as
> $$
> P_{\delta,\varepsilon}(t)
> =\varepsilon
> \begin{pmatrix}
> \cosh t&\sinh t\\
> \delta\sinh t&\delta\cosh t
> \end{pmatrix},
> $$
> where
> $$
> \delta\in\{1,-1\},\qquad
> \varepsilon\in\{1,-1\},\qquad
> t\in\mathbb R.
> $$
> For fixed $(\delta,\varepsilon)$, the displayed parametrization is a continuous path through the entire corresponding subset, so that subset is path-connected.
>
> Conversely, $a$ never vanishes because $a^2-b^2=1$. Therefore both
> $$
> \det P=\delta
> \quad\text{and}\quad
> \operatorname{sgn}(a)=\varepsilon
> $$
> are constant along any path in $O_{1,1}$. Paths cannot join subsets with different pairs $(\delta,\varepsilon)$. Hence these four subsets are exactly the four path-connected components of $O_{1,1}$. $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Indefinite Bilinear Forms and Lorentz Groups|Indefinite Bilinear Forms and Lorentz Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]

## Notes

The four components are indexed by determinant (orientation) and the sign of the first diagonal entry (often interpreted as time orientation).

**Source status:** The exercise is stated in [S1, Ch. 9, Exercises §1, Ex. 1.4, printed p. 283, PDF p. 295]. The equations, parametrization, and component proof are complete independent derivations.
