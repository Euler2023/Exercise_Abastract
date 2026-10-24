---
title: 'Exercise Gal167: Microprimes of the Separable Closure'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §4, Exercise 3, printed p. 290, PDF p. 309
source_refs:
- S4/ch-IV/sec-4/ex-3
created: '2026-10-23'
---

# Exercise Gal167: Microprimes of the Separable Closure

## Problem Statement

> [!question] Neukirch IV.4.3
> For an infinite extension $L|K$, let
> $$
> \operatorname{spec}(L)=\varprojlim_\alpha\operatorname{spec}(L_\alpha),
> $$
> where $L_\alpha|K$ varies over the finite subextensions of $L|K$. What are the microprimes of $\bar k$?

## Hints

> [!hint]- Hint 1
> Fix a microprime of the base field and a primitive representative $s$. At a finite Galois level, the microprimes above it are described by the coset representation of $\overline{\langle s\rangle}$ in the finite quotient.

> [!hint]- Hint 2
> Take the inverse limit over all finite levels to obtain $G/\overline{\langle s\rangle}$. Its points may equivalently be interpreted as actual conjugate elements, rather than conjugacy classes.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Retain the hypothesis on closed abelian subgroups from the preceding two exercises. For a base microprime $\mathfrak p=[s]_G$, put $C=\overline{\langle s\rangle}=C_G(s)$. A finite Galois level $L_\alpha/k$ corresponds to an open normal subgroup $H_\alpha$. The preceding exercise identifies the fiber as
> $$
> \operatorname{spec}(L_\alpha)_{\mathfrak p}\simeq H_\alpha\backslash G/C.
> $$
> The intersection of all $H_\alpha$ is $1$. Compactness gives
> $$
> \varprojlim_\alpha H_\alpha\backslash G/C\simeq G/C:
> $$
> The compatible coset fibers form a family of compact closed sets with the finite intersection property, producing a representative. If two representatives agree in every finite quotient, their quotient belongs to the closed subgroup $C$, so they determine the same point.
>
> The map $gC\mapsto gsg^{-1}$ is a bijection onto the set of actual conjugates of $s$: injectivity follows precisely from $C=C_G(s)$. Taking the union of the fibers over all base microprimes thus identifies $\operatorname{spec}(\bar k)$ with the primitive Frobenius **elements themselves** in $G$, whereas $\operatorname{spec}(k)$ records only their conjugacy classes. Equivalently, each point corresponds to a maximal procyclic subgroup with its actual embedding in $G$ and a generator of positive integral degree; that generator is uniquely determined by $d$.
>
> This does not apply the finite-level definition mechanically to the trivial group $G_{\bar k}$. At an infinite level, the statement instead uses an inverse-limit definition, retaining the compatible positions at all finite levels.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Infinite Galois Extensions]]
- [[04 - Linear Algebra and Modules/Concepts/Direct and Inverse Limits|Inverse Limits]]
- [[01 - Group Theory/Concepts/Group Actions|Conjugation Actions]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §4, Exercise 3, printed p. 290, PDF p. 309]. An independent fiberwise inverse-limit calculation. For a general infinite $L$, well-definedness follows from compatibility of the finite-level constructions.
