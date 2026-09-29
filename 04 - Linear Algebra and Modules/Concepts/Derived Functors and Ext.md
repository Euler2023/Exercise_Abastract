---
title: Derived Functors and Ext
aliases:
  - Ext Groups
  - Injective and Projective Resolutions
topic: module-theory
tags:
  - concept
  - definition
  - module-theory
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XX, §6, printed p. 791, PDF p. 806; Ch. XX, Exercises 27-30, printed pp. 831-832, PDF pp. 846-847"
source_status: verified
status: not-started
created: 2026-09-29
---

# Derived Functors and Ext

## Definition

Let $F$ be an additive covariant left-exact functor on an abelian category with enough injectives. Choose an injective resolution $0\to M\to I^0\to I^1\to\cdots$. Its **right-derived functors** are
$$
R^qF(M)=H^q(F(I^\bullet)).
$$
Left exactness identifies $R^0F$ with $F$. Chain comparison and homotopy show that this is independent of the chosen resolution.

For modules, fix $M$. The functor $\operatorname{Hom}_A(M,-)$ is left exact and
$$
\operatorname{Ext}^q_A(M,N)=R^q\operatorname{Hom}_A(M,-)(N).
$$
Equivalently take a projective resolution $P_\bullet\to M$ and compute $H^q(\operatorname{Hom}_A(P_\bullet,N))$.

## Intuition

Derived functors measure information lost when a functor preserves only one side of exactness. Ext in degree one measures extensions of modules; higher degrees measure subsequent lifting obstructions through a resolution.

## Key Properties

- A short exact sequence in either argument gives a long exact Ext sequence, covariant in $N$ and contravariant in $M$.
- If $P$ is projective then $\operatorname{Ext}^{q>0}_A(P,N)=0$. If $I$ is injective then $\operatorname{Ext}^{q>0}_A(M,I)=0$.
- For $0\to K\to P\to M\to0$ with $P$ projective,
  $$
  \operatorname{Ext}^1_A(M,N)
  \cong\operatorname{coker}\bigl(\operatorname{Hom}_A(P,N)\to\operatorname{Hom}_A(K,N)\bigr).
  $$
- This cokernel parametrizes extensions $0\to N\to E\to M\to0$ up to equivalence fixing $M,N$. The zero class corresponds to a split extension.
- A first-quadrant double complex has $\operatorname{Tot}^nK=\bigoplus_{p+q=n}K^{p,q}$. A map inducing an isomorphism on each column's cohomology induces an isomorphism on total cohomology. Boundedness along each total degree is essential to the elementary elimination proof.

## Examples

If $R$ is a PID and $a\ne0$, the free resolution with differential multiplication by $a$ gives
$$
\operatorname{Ext}^1_R(R/aR,N)\cong N/aN.
$$
For $a=0$, the first argument is free and Ext in degree one is zero; the formula must not be used.

For a group $G$, invariants are $\operatorname{Hom}_{\mathbb Z[G]}(\mathbb Z,-)$, so ordinary group cohomology is $\operatorname{Ext}^q_{\mathbb Z[G]}(\mathbb Z,-)$. These are right-derived functors of the covariant invariants functor.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Hom Functor]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Injective Modules and Baer Criterion]]
- [[04 - Linear Algebra and Modules/Concepts/Projective Modules and Grothendieck Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions]]
- [[04 - Linear Algebra and Modules/Concepts/Complexes and Cohomology under Base Change]]

## Exercises

```dataview
TABLE status, difficulty, source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

The right-derived definition was checked at [S2, Ch. XX, §6, printed p. 791, PDF p. 806]; independence uses the named chain comparison and homotopy theorem described there. The balanced projective/injective computation and long exact sequences are imported homological-algebra inputs, not reproved here. The extension classification, cyclic computation, tensor differential, and total-complex comparison are proved independently in XX.27–30.

The last paragraph of Example 1 on printed p. 791 reverses the Ext arguments relative to its displayed extension: $0\to A\to E\to M\to0$ represents $\operatorname{Ext}^1(M,A)$, not $\operatorname{Ext}^1(A,M)$. The convention in XX.27 and in this note uses quotient first and kernel second.
