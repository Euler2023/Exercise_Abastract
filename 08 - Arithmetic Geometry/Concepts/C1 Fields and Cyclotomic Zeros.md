---
title: C1 Fields and Cyclotomic Zeros
aliases:
  - C1 Fields
  - Quasi-Algebraically Closed Fields
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. V, Exercise 30, printed p. 256, PDF p. 271; Helene Esnault, Rational points over C1 fields, Section 1"
source_status: verified
status: not-started
created: 2026-09-06
---

# C1 Fields and Cyclotomic Zeros

## Definition

> [!info] A $C_1$ field
> A field $K$ is called **$C_1$**, or quasi-algebraically closed, if every homogeneous polynomial of positive degree $d$ in $n>d$ variables over $K$ has a nontrivial zero in $K^n$.
>
> Equivalently, every degree-$d$ hypersurface in $\mathbb P_K^{n-1}$ with $n>d$ has a $K$-rational point. Nontrivial means that not all coordinates vanish.

## Intuition

Homogeneity always gives the zero vector. The $C_1$ property asks for a genuine projective point when the number of variables exceeds the degree. This is a condition on rational points, not a claim that every one-variable polynomial splits.

## Key Properties

- The degree-one case holds over every field by the dimension of the kernel of a linear map.
- Algebraically closed fields are $C_1$: restrict the form to any projective line. The restriction is either identically zero or a binary homogeneous form of positive degree, which has a projective zero over an algebraically closed field.
- The rational field is not $C_1$, since $X^2+Y^2+Z^2$ has no nontrivial rational zero, although $3>2$.
- If $K$ is $C_1$, this definition can be applied only to polynomials whose coefficients lie in $K$. It does not automatically identify the fields needed for individual zeros.

## Artin's Cyclotomic Question

> [!warning] Conjectural boundary
> Lang V.30 asks whether every rational-coefficient homogeneous form of degree $d<n$ has a nontrivial zero over some cyclotomic field $\mathbb Q(\zeta)$. The source explicitly labels the answer unknown.
>
> The wider statement that the maximal abelian extension $\mathbb Q^{\mathrm{ab}}$ is $C_1$ is presented as an Artin conjecture in Esnault's survey. This note does not provide a proof.

The full Kronecker–Weber theorem identifies $\mathbb Q^{\mathrm{ab}}$ with the union of cyclotomic fields. Under this external theorem, the field-wide $C_1$ conjecture implies Lang's rational-coefficient exercise: a zero uses finitely many coordinates, which all lie in a single cyclotomic field by taking a common multiple of their root-of-unity orders. No converse reduction is asserted here.

## Examples and Verified Special Cases

> [!example] A rational quadratic form
> The form $X^2+Y^2+Z^2$ has the nontrivial zero $(1,i,0)$ over $\mathbb Q(i)=\mathbb Q(\zeta_4)$.

More generally, a quadratic form over $\mathbb Q$ in more than two variables can be diagonalized over $\mathbb Q$. A zero coefficient gives a rational zero; otherwise two nonzero diagonal terms can be canceled after adjoining one square root. The quadratic Kronecker–Weber theorem places that extension in a cyclotomic field. The exercise note supplies the full argument and distinguishes this special case from the general conjecture.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Rational Points|Rational Points]]
- [[08 - Arithmetic Geometry/Concepts/Diophantine Equations|Diophantine Equations]]
- [[08 - Arithmetic Geometry/Concepts/Affine and Projective Varieties|Affine and Projective Varieties]]
- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]
- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]]

## Exercises

```dataview
TABLE status, difficulty, source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

- The exact rational-coefficient conjecture and its “not known” qualification were checked in [S2, Ch. V, Ex. 30, printed p. 256, PDF p. 271].
- The $C_1$ definition and broader conjectural context are from [Hélène Esnault, *Rational points over $C_1$ fields*, §1](https://page.mi.fu-berlin.de/esnault/preprints/helene/149_manin.pdf). This context is not a claimed solution.
- The quadratic cyclotomic input is proved in [S2, Ch. VI, Thm. 3.3, printed pp. 281–282, PDF pp. 296–297]. The full Kronecker–Weber identification above is an external standard input, used only to explain the wider formulation; Lang states it but explicitly does not prove it [S2, Ch. VI, printed p. 282, PDF p. 297].
- “Verified” records the definitions, source attribution, and stated proof boundaries; the conjecture remains unproved here.
