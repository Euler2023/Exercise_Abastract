---
title: "Exercise Rep76: Duality of Homomorphisms of Finite Abelian Groups"
topic: representation-theory
difficulty: intermediate
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 5, Ex. 5.7, printed p. 318, PDF p. 330"
created: 2026-08-27
---

# Exercise Rep76: Duality of Homomorphisms of Finite Abelian Groups

## Problem Statement

> [!question] Exercise 5.7
> **(a)** Let $\varphi:G\to G'$ be a homomorphism of abelian groups. Define an induced homomorphism $\widehat\varphi:\widehat{G'}\to\widehat G$ between their character groups. **(b)** Prove that if $\varphi$ is injective, then $\widehat\varphi$ is surjective, and conversely.

## Hints

> [!hint]- Hint 1
> Define $\widehat\varphi(\chi)=\chi\circ\varphi$ and compare kernels and cardinalities.

## Solution

> [!success]- Solution
> Define $\widehat\varphi(\chi)=\chi\circ\varphi$. This reverses arrows and is a homomorphism. A character lies in its kernel exactly when it is trivial on $\varphi(G)$, so
>
> $$
> \ker\widehat\varphi\cong\widehat{G'/\varphi(G)}.
> $$
>
> For finite abelian groups, $|\widehat A|=|A|$. Hence $\widehat\varphi$ is injective iff $G'/\varphi(G)$ is trivial, i.e. iff $\varphi$ is surjective. Applying the same argument to cardinalities,
>
> $$
> |\operatorname{im}\widehat\varphi|=\frac{|G'|}{|G'/\varphi(G)|}=|\varphi(G)|.
> $$
>
> Therefore $\widehat\varphi$ is surjective iff $|\varphi(G)|=|G|$, i.e. iff $\varphi$ is injective. This proves the stated equivalence. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Abelian Groups|Abelian Groups]]
- [[06 - Representation Theory/Concepts/Characters|Characters]]

## Notes

- **Scope:** the injective/surjective equivalence uses finiteness, as in the chapter context.
- **Source status:** [S1, Ch. 10, §5, Ex. 5.7, printed p. 318, PDF p. 330].

