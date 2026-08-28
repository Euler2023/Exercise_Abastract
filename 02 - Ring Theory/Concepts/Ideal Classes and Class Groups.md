---
title: Ideal Classes and Class Groups
aliases:
  - Ideal Class Group
  - Class Group of a Quadratic Integer Ring
topic: ring-theory
tags:
  - concept
  - ring-theory
  - ideals
  - class-groups
created: 2026-08-28
source: "Michael Artin, Algebra, 2nd ed., Ch. 13, §§13.7–13.8, printed pp. 395–402, PDF pp. 407–414"
source_status: partially-verified
status: not-started
---

# Ideal Classes and Class Groups

## Definition

Let $R$ be the ring of integers in an imaginary quadratic number field. Two nonzero ideals $A$ and $A'$ are **similar** if

$$
A'=\lambda A
$$

for some nonzero complex number $\lambda$. The scalar necessarily belongs to the ambient quadratic field. Similarity is an equivalence relation, and its equivalence classes are the **ideal classes**.

Geometrically, multiplication by $\lambda$ rotates and scales the ideal lattice without reversing orientation. Thus an ideal class is also an orientation-preserving lattice-similarity type.

## Class-Group Operation

Ideal multiplication descends to classes:

$$
[A][B]=[AB].
$$

This is well defined because $(\lambda A)(\mu B)=\lambda\mu AB$. The class of the unit ideal $R$ is the identity and consists exactly of the principal ideals.

The conjugate ideal supplies an inverse. The Main Lemma gives

$$
A\overline A=(n)
$$

for some positive integer $n$, so

$$
[A]^{-1}=[\overline A].
$$

The resulting abelian group is the **ideal class group**, denoted $\operatorname{Cl}(R)$.

## Key Consequences

> [!abstract] Principality and unique factorization
> For the ring of integers in an imaginary quadratic field, the following are equivalent:
>
> 1. $\operatorname{Cl}(R)$ is trivial;
> 2. every nonzero ideal is principal;
> 3. $R$ is a principal ideal domain;
> 4. $R$ is a unique factorization domain.

> [!tip] Computing a class group
> Bound the norms of ideal-class representatives, factor the relevant small rational-prime ideals, and record relations arising from principal ideals $(\alpha)$. Conjugate prime factors represent inverse classes.

## Examples

For $R=\mathbb Z[\sqrt{-5}]$, the ideal $P=(2,1+\sqrt{-5})$ is nonprincipal and satisfies $P^2=(2)$. Every ideal is similar either to $R$ or to $P$, so

$$
\operatorname{Cl}(R)\cong\mathbb Z/2\mathbb Z.
$$

For $R=\mathbb Z[\sqrt{-6}]$, the ideals $P=(2,\sqrt{-6})$ and $Q=(3,\sqrt{-6})$ satisfy

$$
P^2=(2),
\qquad
Q^2=(3),
\qquad
PQ=(\sqrt{-6}).
$$

They represent the same nontrivial class, again giving a class group of order two.

## Related Concepts

- [[02 - Ring Theory/Concepts/Ideals|Ideals]]
- [[02 - Ring Theory/Concepts/Prime Splitting in Quadratic Fields|Prime Splitting in Quadratic Fields]]
- [[02 - Ring Theory/Concepts/Principal Ideal Domains|Principal Ideal Domains]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

The similarity relation, class-group operation, conjugate inverse, and principality criterion were checked against [S1, Ch. 13, §§13.7–13.8, printed pp. 395–402, PDF pp. 407–414]. The two order-two examples are independently verified from the displayed ideal products and the ideal-shape classification in this vault.
