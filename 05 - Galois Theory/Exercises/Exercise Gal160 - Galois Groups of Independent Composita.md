---
title: 'Exercise Gal160: Galois Groups of Independent Composita'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §1, Exercise 2, printed p. 264, PDF p. 283
source_refs:
- S4/ch-IV/sec-1/ex-2
created: '2026-10-23'
---

# Exercise Gal160: Galois Groups of Independent Composita

## Problem Statement

> [!question] Neukirch IV.1.2
> Given a family of Galois extensions $K_i|k$ in $\Omega|k$, let $K|k$ be the composite of all $K_i|k$, and $K_i'|k$ the composite of the extensions $K_j|k$ such that $j\ne i$. If $K_i\cap K_i'=k$ for all $i$, then one has a topological isomorphism
> $$
> G(K|k)\simeq\prod_iG(K_i|k).
> $$

## Hints

> [!hint]- Hint 1
> Restriction to the fields $K_i$ gives a continuous injection. First show that the projection to any finite set of coordinates is surjective.

> [!hint]- Hint 2
> Use induction for a finite family, comparing one $K_i$ with the compositum of the others at each step. The hypothesis is stronger than pairwise trivial intersections.

> [!hint]- Hint 3
> Surjectivity on every finite set of coordinates makes the image dense in the product. The image is also compact and closed, hence equals the whole product.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> The compositum $K/k$ of the Galois extensions $K_i/k$ is Galois. Restriction gives a continuous homomorphism
> $$
> r:G(K/k)\longrightarrow\prod_iG(K_i/k).
> $$
> An automorphism that is the identity on every $K_i$ is the identity on their generated field $K$, proving injectivity.
>
> For a finite index set $F$, let $K_F$ be the corresponding compositum. Inductively prove $G(K_F/k)\simeq\prod_{i\in F}G(K_i/k)$. The case of one field is immediate. On adding $i$, we have $K_i\cap K_{F\setminus\{i\}}\subseteq K_i\cap K_i'=k$, with both fields containing $k$, so the intersection is $k$. The restriction isomorphism from the preceding exercise realizes all automorphisms of $K_i$ over the other compositum, corresponding to $[K_F:K_{F\setminus\{i\}}]$. More directly, $K_i$ is linearly disjoint from that compositum, so specified automorphisms act factorwise on the tensor product and descend to the compositum. Linear disjointness also follows by applying the preceding Galois-group result to finite Galois subextensions and comparing degrees; this covers infinite $K_i$ as well.
>
> Thus arbitrary automorphisms on finitely many coordinates can be realized on $K_F$. An automorphism of $K_F/k$ extends to $K/k$ by the embedding extension theorem for normal separable extensions, or by surjectivity of restriction in the infinite Galois correspondence. Hence every finite-coordinate projection of $r$ is surjective, making its image dense in the product topology.
>
> The group $G(K/k)$ is compact and the target product is Hausdorff, so the image is closed. A closed dense image is the whole product. The resulting continuous bijection is again a homeomorphism by compactness and the Hausdorff property.

## Related Concepts

- [[05 - Galois Theory/Concepts/Fundamental Theorem|Galois Correspondence]]
- [[05 - Galois Theory/Concepts/Composita and Restriction Maps|Linear Disjointness]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §1, Exercise 2, printed p. 264, PDF p. 283]. This is an independent finite-coordinate and compactness argument.
- **Boundary:** Pairwise intersections $K_i\cap K_j=k$ do not suffice. For example, $\mathbb Q(\sqrt2),\mathbb Q(\sqrt3),\mathbb Q(\sqrt6)$ intersect pairwise in $\mathbb Q$, but their compositum has Galois group of order four, whereas the product of three groups of order two has order eight. The hypothesis requires intersection $k$ with the compositum of all the other fields.
