---
title: "Exercise LA435: Invariants Classify Vector Spaces with an Endomorphism"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - module-theory
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIV, Exercises, Exercise 19, printed p. 570, PDF p. 585"
created: 2026-09-29
---

# Exercise LA435: Invariants Classify Vector Spaces with an Endomorphism

## Problem Statement

> [!question] Lang, Chapter XIV, Exercise 19
> Let $(E,A)$ and $(E',A')$ be pairs consisting of a finite-dimensional vector space over a field $k$, and a $k$-endomorphism. Show that these pairs are isomorphic if and only if their invariants are equal.

## Hints

> [!hint]- Hint 1: Interpret an isomorphism of pairs
> A linear isomorphism $F:E\to E'$ is an isomorphism of the pairs when $FA=A'F$. Let the indeterminate $t$ act on the spaces as $A$ and $A'$.

> [!hint]- Hint 2: Match cyclic summands
> The invariant factors $q_1\mid\cdots\mid q_r$ give a decomposition into the modules $k[t]/(q_i)$. Equal lists give identical direct-sum models.

## Solution

> [!success]- Independent solution using the invariant-factor theorem
> Give $E$ the $k[t]$-module structure $f(t)v=f(A)v$, and give $E'$ the corresponding structure for $A'$. A $k$-linear map $F$ satisfies $FA=A'F$ if and only if it is $k[t]$-linear: the forward implication follows by taking powers and then linear combinations of the identity $FA=A'F$, and the reverse implication follows by taking $f(t)=t$.
>
> Lang's Theorem XIV.2.1 gives, for a nonzero finite-dimensional space, a decomposition
>
> $$
> E\simeq\bigoplus_{i=1}^{r}k[t]/(q_i),
> \qquad q_1\mid q_2\mid\cdots\mid q_r,
> $$
>
> where the $q_i$ are the monic, nonconstant invariant factors and the sequence is unique. The same applies to $E'$, with factors $q'_1,\ldots,q'_{r'}$.
>
> If the pairs are isomorphic, the intertwining isomorphism is a $k[t]$-module isomorphism. The uniqueness clause of the theorem therefore gives $r=r'$ and $q_i=q'_i$ for every $i$.
>
> Conversely, suppose their invariant-factor lists are equal. Choose the two decomposition isomorphisms with the same direct-sum model. Their composition gives a $k[t]$-module isomorphism $F:E\to E'$, hence a $k$-linear isomorphism with $FA=A'F$. More explicitly, if $v_i$ and $v'_i$ are cyclic generators with annihilator $(q_i)$, send $f(A)v_i$ to $f(A')v'_i$. This is well-defined because both expressions vanish exactly when $q_i\mid f$, and it is an isomorphism on each summand.
>
> The zero space has the empty invariant-factor list. Thus the same assertion covers zero spaces: equal empty lists mean both spaces are zero, and a nonzero space has a nonempty list.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Cyclic Vectors and Companion Matrices|Cyclic Vectors and Companion Matrices]]
- [[04 - Linear Algebra and Modules/Concepts/Module Homomorphisms|Module Homomorphisms]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Centralizers and Similarity|Matrix Centralizers and Similarity]]
- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]

## Notes

- **Source and proof status:** The exercise was checked on [S2, Ch. XIV, Ex. 19, printed p. 570, PDF p. 585]. The proof above is an independent application of the source theorem, not a solution printed with the exercise.
- **Imported source result:** [S2, Ch. XIV, §2, Theorem 2.1, printed p. 557, PDF p. 572], checked on the page image, supplies existence and uniqueness of the invariant factors. Its proof invokes the structure theorem for finitely generated modules over a principal ideal domain.
- **Boundary:** Equality means equality of the entire monic invariant-factor list. Equality of characteristic polynomials alone does not suffice.
