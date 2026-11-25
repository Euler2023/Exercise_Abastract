---
title: "Exercise Rep174: Adjoint Conjugation Is a Lie Algebra Automorphism"
topic: representation-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - representation-theory
  - adjoint-representation
  - lie-algebras
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 3, Section 3.9, Exercise 13, printed p. 74, PDF p. 86"
source_refs:
  - "S10/ch-3/sec-9/ex-13"
created: 2026-11-25
---

# Exercise Rep174: Adjoint Conjugation Is a Lie Algebra Automorphism

## Problem Statement

> [!question] Original Chapter 3, Exercise 13
> Let $G$ be a matrix Lie group and let $\mathfrak g$ be its Lie algebra. For each $A\in G$, show that $\operatorname{Ad}_A$ is a Lie algebra automorphism of $\mathfrak g$.

## Hints

> [!hint]- Hint 1
> Apply the exponential power series to $tAXA^{-1}$. Use $e^{tX}\in G$ for every real $t$.

> [!hint]- Hint 2
> The proposed inverse is $\operatorname{Ad}_{A^{-1}}$. Expand the commutator of $AXA^{-1}$ and $AYA^{-1}$.

## Solution

> [!success]- Solution
> By Definition 3.32, $\operatorname{Ad}_A(X)=AXA^{-1}$ [S10, printed p. 63, PDF p. 75]. If $X\in\mathfrak g$, Definition 3.18 gives $e^{tX}\in G$ for every real $t$ [S10, printed p. 56, PDF p. 68]. For each integer $k\geq0$, $(AXA^{-1})^k=AX^kA^{-1}$, so the matrix exponential series gives
> $$
> e^{tAXA^{-1}}=Ae^{tX}A^{-1}\in G\qquad(t\in\mathbb R).
> $$
> Therefore $AXA^{-1}\in\mathfrak g$. Multiplication on either side by a fixed matrix is linear, so $\operatorname{Ad}_A$ is a real-linear endomorphism of $\mathfrak g$. Applying the same argument to $A^{-1}\in G$ proves that $\operatorname{Ad}_{A^{-1}}$ is defined on $\mathfrak g$, and composing the two conjugations in either order is the identity.
>
> Finally, for all $X,Y\in\mathfrak g$,
> $$
> \begin{aligned}
> [\operatorname{Ad}_A(X),\operatorname{Ad}_A(Y)]
> &=(AXA^{-1})(AYA^{-1})-(AYA^{-1})(AXA^{-1})\\
> &=A(XY-YX)A^{-1}\\
> &=\operatorname{Ad}_A([X,Y]).
> \end{aligned}
> $$
> Thus $\operatorname{Ad}_A$ is an invertible Lie algebra homomorphism from $\mathfrak g$ to itself.

## Related Concepts

- [[06 - Representation Theory/Concepts/Adjoint Representation and Invariant Trace Forms|Adjoint Representation and Invariant Trace Forms]]
- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]
- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]

## Notes

- **Source status.** The original exercise was checked at 200 dpi on printed p. 74 / PDF p. 86. Theorem 3.20(1) proves that conjugation preserves $\mathfrak g$ [S10, printed p. 56, PDF p. 68]. Proposition 3.33 gives the bracket identity [S10, printed p. 63, PDF p. 75]. The direct argument verifies the preservation, inverse, and bracket calculation explicitly.
- **Concrete check.** For $G=\operatorname{GL}(2;\mathbb R)$ and $A=\operatorname{diag}(2,1)$, the adjoint map sends $E_{12}$ to $2E_{12}$ and $E_{21}$ to $E_{21}/2$. Their commutator is still $E_{11}-E_{22}$, which is fixed by this conjugation.
- **Archive navigation.** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].

