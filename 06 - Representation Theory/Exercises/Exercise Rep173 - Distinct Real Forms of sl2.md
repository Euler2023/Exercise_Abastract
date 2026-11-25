---
title: "Exercise Rep173: Distinct Real Forms of sl2"
topic: representation-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - representation-theory
  - lie-algebras
  - complexification
  - killing-form
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 3, Section 3.9, Exercise 11, printed p. 74, PDF p. 86"
source_refs:
  - "S10/ch-3/sec-9/ex-11"
created: 2026-11-25
---

# Exercise Rep173: Distinct Real Forms of sl2

## Problem Statement

> [!question] Original Chapter 3, Exercise 11
> Show that $\operatorname{su}(2)$ and $\operatorname{sl}(2;\mathbb R)$ are not isomorphic Lie algebras, even though $\operatorname{su}(2)_{\mathbb C}\cong\operatorname{sl}(2;\mathbb R)_{\mathbb C}\cong\operatorname{sl}(2;\mathbb C)$.

## Hints

> [!hint]- Hint 1
> A real Lie algebra isomorphism transports the adjoint operators $\operatorname{ad}_X$ by similarity. Compare $\operatorname{tr}(\operatorname{ad}_X^2)$ for the two algebras.

> [!hint]- Hint 2
> For the compact algebra, use its cross-product model. In the split algebra, take $H=\operatorname{diag}(1,-1)$ and evaluate its brackets with the two off-diagonal matrix units.

> [!hint]- Hint 3
> To complexify $\operatorname{su}(2)$ inside $\operatorname{sl}(2;\mathbb C)$, use the decomposition into skew-Hermitian and Hermitian parts.

## Solution

> [!success]- Solution
> **Distinguish the real algebras.** For a real Lie algebra $\mathfrak g$, set $q_{\mathfrak g}(X)=\operatorname{tr}((\operatorname{ad}_X)^2)$, where $\operatorname{ad}_X(Y)=[X,Y]$ as a real-linear map on $\mathfrak g$. If $f:\mathfrak g\to\mathfrak h$ is a Lie algebra isomorphism, then
> $$
> f\operatorname{ad}_X f^{-1}=\operatorname{ad}_{f(X)}
> $$
> by preservation of brackets. Thus $q_\mathfrak g(X)=q_\mathfrak h(f(X))$ by invariance of trace under similarity.
>
> The calculated cross-product model in Exercise 10 turns $\operatorname{ad}_X$ on $\operatorname{su}(2)$ into the map $T_x:y\mapsto x\times y$ on $\mathbb R^3$, where $x=\phi(X)$. This map is skew-symmetric in the Euclidean inner product, because $(x\times y)\cdot z=-y\cdot(x\times z)$ by skew-symmetry of the scalar triple product. In standard coordinates,
> $$
> \operatorname{tr}(T_x^2)=-\operatorname{tr}(T_x^{\mathsf T}T_x)
> =-\sum_{i,j}(T_x)_{ij}^{\,2}\leq0.
> $$
> In $\operatorname{sl}(2;\mathbb R)$, the brackets of $H=\operatorname{diag}(1,-1)$ with $H$, $E_{12}$, and $E_{21}$ are respectively $0$, $2E_{12}$, and $-2E_{21}$. Hence $\operatorname{ad}_H$ has eigenvalues $0,2,-2$ on this real basis, and $q_{\operatorname{sl}(2;\mathbb R)}(H)=8>0$. An isomorphism would carry some element of $\operatorname{su}(2)$ to $H$, contradicting the sign bound.
>
> **Identify the complexifications.** Inside $\operatorname{sl}(2;\mathbb C)$ every traceless matrix $Z$ has the decomposition
> $$
> Z=\frac{Z-Z^*}{2}+i\,\frac{Z+Z^*}{2i}.
> $$
> The two matrices $X=(Z-Z^*)/2$ and $Y=(Z+Z^*)/(2i)$ are trace-zero skew-Hermitian. The intersection of $\operatorname{su}(2)$ and $i\operatorname{su}(2)$ is zero because every matrix in the intersection is both Hermitian and skew-Hermitian. Therefore the natural complex-linear map from the formal complexification $\operatorname{su}(2)_{\mathbb C}$ to $\operatorname{sl}(2;\mathbb C)$ given by $X+iY\mapsto X+iY$ is bijective. It preserves brackets by the complex bilinearity of the matrix commutator. The same map from $\operatorname{sl}(2;\mathbb R)_{\mathbb C}$ is bijective by taking real and imaginary parts of the entries, both with trace zero. This proves the asserted complex Lie algebra isomorphisms.

## Related Concepts

- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]
- [[06 - Representation Theory/Concepts/Adjoint Representation and Invariant Trace Forms|Adjoint Representation and Invariant Trace Forms]]
- [[06 - Representation Theory/Concepts/Semisimple Lie Algebras|Semisimple Lie Algebras]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]

## Notes

- **Source status.** The original exercise was checked at 200 dpi on printed p. 74 / PDF p. 86. Hall supplies the complexification construction and states both identifications in equation (3.17) [S10, Def. 3.36, Props. 3.37–3.38, printed pp. 65–66, PDF pp. 77–78]. The real nonisomorphism and the explicit matrix decompositions are supplied independently here.
- **Proof input.** The skew-adjointness computation uses the real bracket isomorphism of [[06 - Representation Theory/Exercises/Exercise Rep172 - The Cross Product Model of su2|Hall Chapter 3, Exercise 10]]. The invariant used is the trace of the square of an adjoint operator, computed in the real Lie algebra itself.
- **Archive navigation.** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].

