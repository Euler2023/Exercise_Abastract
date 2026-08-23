---
title: Opposite Groups
aliases:
  - Opposite Group
topic: group-theory
tags:
  - concept
  - definition
  - group-theory
  - opposite-groups
created: 2026-08-10
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 2, Ex. 2.6"
source_status: partially-verified
status: not-started
---

# Opposite Groups

## Definition

> [!info] Definition (Opposite Group)
> Let $G$ be a group with multiplication $(a,b)\mapsto ab$. The **opposite group** $G^{\mathrm{op}}$ has the same underlying set as $G$, but its multiplication is reversed:
> $$a*b=ba.$$

The symbol on the right denotes multiplication in the original group $G$.

## Group Structure

> [!abstract] Proposition
> The reversed multiplication makes $G^{\mathrm{op}}$ a group. Its identity and inverses are the same elements as those of $G$.
>
> **Proof.** Closure is immediate because $ba\in G$ for $a,b\in G$. For associativity,
> $$(a*b)*c=c(ba)=(cb)a=a*(b*c).$$
> If $e$ is the identity of $G$, then
> $$a*e=ea=a,\qquad e*a=ae=a,$$
> so $e$ is also the identity of $G^{\mathrm{op}}$. Finally, if $a^{-1}$ is the inverse of $a$ in $G$, then
> $$a*a^{-1}=a^{-1}a=e,\qquad a^{-1}*a=aa^{-1}=e.$$
> Hence $a^{-1}$ is also the inverse of $a$ in $G^{\mathrm{op}}$. $\square$

Applying the construction twice restores the original multiplication:
$$
\left(G^{\mathrm{op}}\right)^{\mathrm{op}}=G.
$$

## The Inversion Isomorphism

> [!abstract] Proposition
> Every group is isomorphic to its opposite group. More precisely, the inversion map
> $$
> \iota:G\longrightarrow G^{\mathrm{op}},\qquad \iota(g)=g^{-1},
> $$
> is an isomorphism.
>
> **Proof.** For $a,b\in G$,
> $$
> \iota(ab)=(ab)^{-1}=b^{-1}a^{-1}.
> $$
> Multiplication in $G^{\mathrm{op}}$ reverses the original order, so
> $$
> \iota(a)*\iota(b)=a^{-1}*b^{-1}=b^{-1}a^{-1}.
> $$
> Therefore $\iota(ab)=\iota(a)*\iota(b)$, and $\iota$ is a homomorphism. Since
> $$
> \iota(\iota(g))=(g^{-1})^{-1}=g,
> $$
> the map $\iota$ is its own inverse and is therefore bijective. Hence it is an isomorphism. $\square$

This isomorphism is canonical: it does not require choosing generators or coordinates.

## When Is the Multiplication Unchanged?

> [!abstract] Proposition
> The original and opposite multiplications agree on the common underlying set if and only if $G$ is abelian.
>
> **Proof.** The two products agree exactly when
> $$ab=a*b=ba$$
> for every $a,b\in G$, which is precisely the definition of an abelian group. $\square$

Thus an abelian group is literally equal to its opposite group as a group law, whereas a non-abelian group is generally only isomorphic to its opposite group.

## Key Properties

1. $G^{\mathrm{op}}$ has the same underlying set, identity, and inverse elements as $G$.
2. Multiplication is reversed: $a*b=ba$.
3. Applying the construction twice gives $(G^{\mathrm{op}})^{\mathrm{op}}=G$.
4. Inversion defines a canonical isomorphism $G\cong G^{\mathrm{op}}$.
5. The original and opposite multiplications agree exactly when $G$ is abelian.

## Examples

> [!example] Example 1: Abelian Groups
> For $(\mathbb Z,+)$, reversing the operation changes nothing because $a+b=b+a$. Hence
> $$\mathbb Z^{\mathrm{op}}=\mathbb Z.$$

> [!example] Example 2: The Symmetric Group
> In $S_3$, the opposite product differs from the original product because $S_3$ is non-abelian. Nevertheless, the map $\sigma\mapsto\sigma^{-1}$ gives an isomorphism
> $$S_3\cong S_3^{\mathrm{op}}.$$

> [!example] Example 3: Matrix Groups
> For $GL_n(F)$, opposite multiplication reverses the order of matrix products. The familiar identity
> $$(AB)^{-1}=B^{-1}A^{-1}$$
> is exactly what makes inversion a homomorphism into the opposite group.

## Related Concepts

- [[01 - Group Theory/Concepts/Binary Operations and Associativity|Binary Operations and Associativity]]
- [[01 - Group Theory/Concepts/Group Definition|Group Definition]]
- [[01 - Group Theory/Concepts/Abelian Groups|Abelian Groups]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```


## Source and Proof Status

The construction is prompted by [S1, Ch. 2, Section 2, Ex. 2.6]. All three propositions are proved completely in this note from associativity, identity, inverse, and homomorphism definitions; no external theorem is imported.
