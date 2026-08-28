---
title: "Exercise LA342: Modules over C[x,y] as Commuting Operator Pairs"
topic: module-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - module-theory
  - polynomial-rings
  - commuting-operators
source: "Michael Artin, Algebra, 2nd ed., Ch. 14, Linear Algebra in a Ring, Section 9, Polynomial Rings in Several Variables, Ex. 9.3, printed p. 440, PDF p. 452"
created: 2026-08-28
---

# Exercise LA342: Modules over C[x,y] as Commuting Operator Pairs

## Problem Statement

> [!question] Exercise 9.3
> Following the model of the polynomial ring in one variable, describe modules over $\mathbb C[x,y]$ in terms of complex vector spaces with additional structure.

## Hints

> [!hint]- Hint 1
> Record the actions of $x$ and $y$ as two endomorphisms and translate the relation $xy=yx$.

## Solution

> [!success]- Solution
> A $\mathbb C[x,y]$-module $V$ is equivalently a complex vector space equipped with two commuting complex-linear endomorphisms $X,Y:V\to V$.
>
> Given a module, define
>
> $$
> X(v)=xv,
> \qquad
> Y(v)=yv.
> $$
>
> Since $xy=yx$ in the polynomial ring, $XY=YX$. Conversely, given commuting $X,Y$, define
>
> $$
> f(x,y)\cdot v=f(X,Y)v.
> $$
>
> Commutativity makes polynomial evaluation well-defined and the module axioms follow from the ring-homomorphism
>
> $$
> \mathbb C[x,y]\longrightarrow\operatorname{End}_{\mathbb C}(V),
> \qquad
> x\mapsto X, y\mapsto Y.
> $$
>
> These constructions are inverse. Thus
>
> $$
> \boxed{\mathbb C[x,y]\text{-modules}\ \longleftrightarrow\ (V,X,Y)\text{ with }XY=YX.}
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Module Definition]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]

## Notes

- **Routing:** Module Theory is primary because a multivariable scalar action is encoded by commuting endomorphisms.
- **Source status:** [S1, Ch. 14, §14.9, Ex. 9.3, printed p. 440, PDF p. 452]. The equivalence is independent.
