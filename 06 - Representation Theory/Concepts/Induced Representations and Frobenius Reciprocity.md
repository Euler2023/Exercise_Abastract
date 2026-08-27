---
title: Induced Representations and Frobenius Reciprocity
topic: representation-theory
tags:
  - concept
  - representation-theory
  - induced-representation
created: 2026-08-27
---

# Induced Representations and Frobenius Reciprocity

## Definition

> [!info] Induced representation
> Let $H\le G$ and let $S$ be a representation of $H$ on $V$. The induced representation is
>
> $$
> \operatorname{Ind}_H^G S=\mathbb C[G]\otimes_{\mathbb C[H]}V,
> $$
>
> with $G$ acting by left multiplication on the first tensor factor.

## Intuition

Induction transports an $H$-action to $G$ by attaching one copy of $V$ to each left coset of $H$. When $[G:H]=2$, it acts on $V\oplus V$ and elements outside $H$ interchange the two copies.

## Key Properties

- $\dim\operatorname{Ind}_H^G S=[G:H]\dim S$.
- Its character vanishes at elements not conjugate into $H$.
- For an index-two normal subgroup and $a\notin H$,

$$
\operatorname{Res}_H^G\operatorname{Ind}_H^G S\cong S\oplus S^a,
\qquad S^a(h)=S(a^{-1}ha).
$$

> [!abstract] Frobenius reciprocity
> For a representation $R$ of $G$,
>
> $$
> \operatorname{Hom}_G(\operatorname{Ind}_H^G S,R)
> \cong
> \operatorname{Hom}_H(S,\operatorname{Res}_H^G R).
> $$
>
> For finite groups over $\mathbb C$, this is equivalently
>
> $$
> (\chi_{\operatorname{Ind}S},\chi_R)_G
> =(\chi_S,\chi_{\operatorname{Res}R})_H.
> $$

## Example

For $C_n\triangleleft D_n$, reflection sends $\lambda_k(r)=e^{2\pi ik/n}$ to $\lambda_{-k}$. If $k\not\equiv-k\pmod n$, then $\operatorname{Ind}_{C_n}^{D_n}\lambda_k$ is the irreducible two-dimensional dihedral representation whose rotation character is $2\cos(2\pi kj/n)$ and whose reflection character is $0$.

## Related Concepts

- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory Definition]]
- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[06 - Representation Theory/Concepts/Group Algebra|Group Algebra]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

- The index-two block construction, restriction formula, and character-level Frobenius reciprocity are proved as exercises in Artin. [S1, Ch. 10, Misc. Ex. M.9–M.12, printed pp. 321–322, PDF pp. 333–334]
- The group-algebra definition and Hom-space formulation are standard external formulations; their equivalence with the finite-group character identity follows from the tensor-Hom adjunction.
