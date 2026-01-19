---
title: Isomorphism Theorems for Rings
topic: ring-theory
tags:
  - concept
  - theorem
  - ring-theory
created: 2026-01-19
---

# Isomorphism Theorems for Rings

The isomorphism theorems for rings parallel those for groups, providing fundamental structural results about ring homomorphisms and quotient rings.

## First Isomorphism Theorem

> [!abstract] First Isomorphism Theorem
> Let $\phi: R \to S$ be a ring homomorphism. Then:
> $$R/\ker(\phi) \cong \text{im}(\phi)$$
> The isomorphism is given by $r + \ker(\phi) \mapsto \phi(r)$.

> [!example] Application
> The evaluation map $\text{ev}_a: \mathbb{R}[x] \to \mathbb{R}$ at $a \in \mathbb{R}$ has kernel $(x-a)$, so:
> $$\mathbb{R}[x]/(x-a) \cong \mathbb{R}$$

## Second Isomorphism Theorem

> [!abstract] Second Isomorphism Theorem
> Let $S$ be a subring and $I$ an ideal of ring $R$. Then:
> 1. $S + I = \{s + i : s \in S, i \in I\}$ is a subring of $R$
> 2. $S \cap I$ is an ideal of $S$
> 3. $(S + I)/I \cong S/(S \cap I)$

> [!example] Application
> In $\mathbb{Z}$, let $S = 6\mathbb{Z}$ and $I = 4\mathbb{Z}$. Then:
> - $S + I = 2\mathbb{Z}$
> - $S \cap I = 12\mathbb{Z}$
> - $2\mathbb{Z}/4\mathbb{Z} \cong 6\mathbb{Z}/12\mathbb{Z}$

## Third Isomorphism Theorem

> [!abstract] Third Isomorphism Theorem
> Let $I \subseteq J$ be ideals of ring $R$. Then:
> 1. $J/I$ is an ideal of $R/I$
> 2. $(R/I)/(J/I) \cong R/J$

> [!example] Application
> With $I = 6\mathbb{Z}$ and $J = 2\mathbb{Z}$ in $\mathbb{Z}$:
> $$(\mathbb{Z}/6\mathbb{Z})/(2\mathbb{Z}/6\mathbb{Z}) \cong \mathbb{Z}/2\mathbb{Z}$$

## Correspondence Theorem

> [!abstract] Correspondence Theorem (Fourth Isomorphism Theorem)
> Let $I$ be an ideal of $R$. There is a bijection:
> $$\{\text{ideals of } R \text{ containing } I\} \longleftrightarrow \{\text{ideals of } R/I\}$$
> given by $J \mapsto J/I$, which preserves:
> - Inclusion: $J_1 \subseteq J_2 \Leftrightarrow J_1/I \subseteq J_2/I$
> - Sums: $(J_1 + J_2)/I = J_1/I + J_2/I$
> - Intersections: $(J_1 \cap J_2)/I = J_1/I \cap J_2/I$
> - Prime/maximal property

## Key Properties

1. All theorems require $I$ to be an ideal (not just a subring)
2. The isomorphisms are canonical (natural)
3. These theorems help understand the structure of quotient rings
4. They are essential tools for proving ring-theoretic results

## Related Concepts

- [[02 - Ring Theory/Concepts/Ring Homomorphisms|Ring Homomorphisms]]
- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]
- [[02 - Ring Theory/Concepts/Ideals|Ideals]]
- [[01 - Group Theory/Concepts/Isomorphism Theorems|Isomorphism Theorems (Groups)]]
