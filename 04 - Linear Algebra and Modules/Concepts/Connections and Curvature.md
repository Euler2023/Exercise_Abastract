---
title: Connections and Curvature
aliases:
  - Algebraic Connections
  - p Curvature
topic: module-theory
tags:
  - concept
  - definition
  - module-theory
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIX, Exercises 13-15, printed pp. 755-757, PDF pp. 770-772"
source_status: verified
status: not-started
created: 2026-09-29
---

# Connections and Curvature

## Definition

Let $R\to A$ be a commutative algebra and $E$ an $A$-module. An **$R$-connection** is an $R$-linear map
$$
\nabla:E\to\Omega^1_{A/R}\otimes_AE,\qquad
\nabla(ax)=da\otimes x+a\nabla x.
$$
It is generally not $A$-linear. The horizontal elements $\ker\nabla$ form an $R$-submodule.

Put $\Omega^i_{A/R}=\Lambda^i_A\Omega^1_{A/R}$. The exterior differential is determined by
$$
d(a_0\,da_1\wedge\cdots\wedge da_i)=da_0\wedge da_1\wedge\cdots\wedge da_i.
$$
Extend the connection by
$$
\nabla_i(\omega\otimes x)=d\omega\otimes x+(-1)^i\omega\wedge\nabla x.
$$
Its **curvature** is $K=\nabla_1\nabla:E\to\Omega^2_{A/R}\otimes_AE$. A connection is **flat** or **integrable** if $K=0$.

## Intuition

A connection differentiates module-valued quantities, keeping track of both scalar variation and vector variation. Curvature measures the failure of successive directional derivatives to commute after accounting for the commutator of the directions themselves.

## Key Properties

- $K$ is $A$-linear, and $\nabla_{i+1}\nabla_i(\omega\otimes x)=\omega\wedge Kx$. Thus a flat connection gives a de Rham complex with coefficients in $E$.
- For $D\in\operatorname{Der}_R(A,A)$, the universal functional $\iota_D(da)=D(a)$ gives the canonical operator $\nabla_D=(\iota_D\otimes1)\nabla$.
- Contraction yields
  $$
  [\nabla_{D_1},\nabla_{D_2}]-\nabla_{[D_1,D_2]}=(D_1\wedge D_2)K.
  $$
- In characteristic the prime $p$, $D^p$ is again a derivation, and the **$p$-curvature**
  $$
  \psi(D)=\nabla_D^p-\nabla_{D^p}
  $$
  is an $A$-linear endomorphism of $E$ for each fixed $D$.

## Examples and Boundaries

For $E=A$, the map $d:A\to\Omega^1_{A/R}$ is a flat connection. On $R[t]$, $1$ is horizontal but $t$ is not, showing that horizontal elements need not be an $A$-submodule.

For $E=A^r$ with a fixed basis, a connection has the form $\nabla x=dx+\Theta x$ for a matrix $\Theta$ of one-forms. Expanding the definition gives the curvature matrix $d\Theta+\Theta\wedge\Theta$, with matrix multiplication and exterior multiplication in that order.

The identity $\nabla_D(ax)=D(a)x+a\nabla_Dx$ alone does not uniquely characterize a connection-induced family: one may add a suitable $A$-linear endomorphism-valued one-form. The stated uniqueness always refers to contraction of a given $\nabla$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Universal Derivations and Kahler Differentials]]
- [[04 - Linear Algebra and Modules/Concepts/Exterior Algebra]]
- [[04 - Linear Algebra and Modules/Concepts/Complexes and Cohomology under Base Change]]

## Exercises

```dataview
TABLE status, difficulty, source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

Definitions and identities were visually checked in [S2, Ch. XIX, Exercises 13–15, printed pp. 755–757, PDF pp. 770–772]. Independent proofs, including balancing and the curvature commutator calculation, are supplied in the linked exercises. The matrix example is an expansion of the definition. No manifold, smoothness, or projectivity assumption is used in these algebraic identities.
