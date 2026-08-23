---
title: Affine Lie Algebras
topic: representation-theory
tags:
  - concept
  - definition
  - representation-theory
  - lie-theory
  - infinite-dimensional
created: 2026-01-19
source: "Victor G. Kac, Infinite-Dimensional Lie Algebras, 3rd ed., Chs. 6–13, especially Thms. 7.4, 10.4, 13.8"
source_status: partially-verified
status: not-started
---

# Affine Lie Algebras

## Introduction

Affine Lie algebras are the most important class of infinite-dimensional Kac-Moody algebras. They arise as central extensions of loop algebras and play a fundamental role in conformal field theory, string theory, and the theory of modular forms.

## Construction

### Loop Algebra

> [!info] Definition
> Let $\mathfrak{g}$ be a finite-dimensional simple Lie algebra. The **loop algebra** is:
> $$
> L(\mathfrak{g}) = \mathfrak{g} \otimes \mathbb{C}[t, t^{-1}] = \mathfrak{g}[t, t^{-1}]
> $$
>
> with bracket:
> $$
> [X \otimes t^m, Y \otimes t^n] = [X, Y] \otimes t^{m+n}
> $$

Elements are finite Laurent series $\sum_n X_n \otimes t^n$ with $X_n \in \mathfrak{g}$.

### Central Extension

> [!info] Definition
> The **affine Lie algebra** $\widehat{\mathfrak{g}}$ is the central extension:
> $$
> 0 \to \mathbb{C}c \to \widehat{\mathfrak{g}} \to L(\mathfrak{g}) \to 0
> $$
>
> with bracket:
> $$
> [X \otimes t^m, Y \otimes t^n] = [X, Y] \otimes t^{m+n} + m \delta_{m+n,0} (X\mid Y)c
> $$
>
> where $(\cdot\mid\cdot)$ is a fixed invariant symmetric bilinear form (with a declared normalization) and $c$ is central. Replacing the form by a scalar rescales the central element and the numerical notion of level.

### Full Affine Algebra

Adding the derivation $d = t\frac{d}{dt}$:
$$
\widetilde{\mathfrak{g}} = \widehat{\mathfrak{g}} \oplus \mathbb{C}d
$$

with $[d, X \otimes t^n] = n X \otimes t^n$.

## Notation

Common notations for the affine algebra associated to $\mathfrak{g}$:
- $\widehat{\mathfrak{g}}$ (most common)
- $\mathfrak{g}^{(1)}$ (untwisted affine)
- $A_n^{(1)}$, $D_n^{(1)}$, $E_6^{(1)}$, etc. (Dynkin notation)

## Structure

### Cartan Subalgebra

$$
\widehat{\mathfrak{h}} = \mathfrak{h} \oplus \mathbb{C}c \oplus \mathbb{C}d
$$

where $\mathfrak{h}$ is the Cartan subalgebra of $\mathfrak{g}$.

### Root System

> [!info] Affine Root System
> $$
> \widehat{\Delta} = \{\alpha + n\delta : \alpha \in \Delta, n \in \mathbb{Z}\} \cup \{n\delta : n \neq 0\}
> $$
>
> where:
> - $\Delta$ is the root system of $\mathfrak{g}$
> - $\delta$ is the **null root** (imaginary)

**Real roots**: $\alpha + n\delta$ with multiplicity 1
**Imaginary roots**: $n\delta$ with multiplicity $= \text{rank}(\mathfrak{g})$

### Simple Roots

$$
\widehat{\Pi} = \{\alpha_0, \alpha_1, \ldots, \alpha_n\}
$$

where $\alpha_1, \ldots, \alpha_n$ are simple roots of $\mathfrak{g}$ and $\alpha_0 = \delta - \theta$ ($\theta$ is the highest root).

### Affine Dynkin Diagrams

> [!example] Untwisted Affine Diagrams
> | Type | Diagram Description |
> |------|---------------------|
> | $A_n^{(1)}$ | Cycle of $n+1$ nodes |
> | $D_n^{(1)}$ | $D_n$ with extra node |
> | $E_6^{(1)}$ | $E_6$ with extra node on long arm |
> | $E_7^{(1)}$ | $E_7$ with extra node |
> | $E_8^{(1)}$ | $E_8$ with extra node |

## The Simplest Example: $\widehat{\mathfrak{sl}}_2$

### Generators

- $e_0, e_1$ (positive Chevalley generators)
- $f_0, f_1$ (negative Chevalley generators)
- $h_0, h_1, c, d$ (Cartan elements)

### Realization

$$
e_1 = e \otimes 1, \quad f_1 = f \otimes 1, \quad h_1 = h \otimes 1
$$
$$
e_0 = f \otimes t, \quad f_0 = e \otimes t^{-1}, \quad h_0 = -h \otimes 1 + c
$$

### Relations

$$
[h_1, e_1] = 2e_1, \quad [h_1, f_1] = -2f_1, \quad [e_1, f_1] = h_1
$$
$$
[h_0, e_0] = 2e_0, \quad [h_0, f_0] = -2f_0, \quad [e_0, f_0] = h_0
$$
The mixed Chevalley brackets satisfy $[e_0,f_1]=[e_1,f_0]=0$. In contrast, $[e_0,e_1]$ and $[f_0,f_1]$ are not zero. Since the Cartan matrix is $\begin{pmatrix}2&-2\\-2&2\end{pmatrix}$, the Serre relations are
$$
(\operatorname{ad}e_0)^3e_1=(\operatorname{ad}e_1)^3e_0=0,
\qquad
(\operatorname{ad}f_0)^3f_1=(\operatorname{ad}f_1)^3f_0=0.
$$

## Representation Theory

### Highest Weight Modules

> [!info] Definition
> A weight $\lambda \in \widehat{\mathfrak{h}}^*$ is specified by:
> - $\lambda|_\mathfrak{h}$ (classical part)
> - $\lambda(c) = k$ (the **level**)
> - $\lambda(d) = s$ (the **grade**)

### Integrable Modules

> [!abstract] Theorem
> An irreducible highest-weight module $L(\lambda)$ is integrable exactly when $\lambda$ is dominant integral:
> $$
> \langle\lambda,\alpha_i^\vee\rangle\in\mathbb Z_{\geq0}
> \quad\text{for every affine simple coroot }\alpha_i^\vee.
> $$
> Its level $k=\lambda(c)$ is then a nonnegative integer. Level alone is not sufficient.

At level $k$, there are finitely many integrable modules.

### Characters and Modular Forms

> [!abstract] Theorem
> After Kac's anomaly/energy normalization, the characters of integrable highest-weight modules at fixed positive level do not generally transform one by one as scalar modular forms. In the affine types covered by Kac's theorem, their finite-dimensional span is invariant under a specified $SL_2(\mathbb Z)$ action:
> $$
> \chi_\lambda(\tau,z,u)=q^{m_\lambda}\operatorname{ch}L(\lambda).
> $$

Here $q=e^{2\pi i\tau}$; the remaining variables encode the Cartan, degree, and central directions. Converting this formal normalized character to a trace $q^{L_0-c/24}$ requires the corresponding conformal normalization.

## Connection to Physics

### Conformal Field Theory

The **Wess-Zumino-Witten (WZW) model** has $\widehat{\mathfrak{g}}_k \oplus \widehat{\mathfrak{g}}_k$ symmetry at level $k$.

### Virasoro Algebra

> [!info] Sugawara Construction
> From $\widehat{\mathfrak{g}}_k$, one constructs Virasoro operators:
> $$
> L_n = \frac{1}{2(k + h^\vee)} \sum_m \sum_a :J^a_m J^a_{n-m}:
> $$
>
> with central charge (for the standard normalization and $k\neq-h^\vee$):
> $$
> c = \frac{k \dim \mathfrak{g}}{k + h^\vee}
> $$
>
> where $h^\vee$ is the dual Coxeter number.

### String Theory

Affine Lie algebras appear in:
- **Heterotic string** worldsheet theory
- **Current algebras** on D-branes
- **Kaluza-Klein** compactifications

## Twisted Affine Algebras

> [!info] Definition
> **Twisted affine algebras** arise from automorphisms $\sigma$ of $\mathfrak{g}$:
> $$
> L(\mathfrak{g}, \sigma) = \bigoplus_{n \in \mathbb{Z}} \mathfrak{g}_{\bar{n}} \otimes t^n
> $$
>
> where $\mathfrak{g}_{\bar{n}}$ is the $\sigma$-eigenspace with eigenvalue $e^{2\pi i n/r}$.

Examples: $A_n^{(2)}$, $D_n^{(2)}$, $E_6^{(2)}$, $D_4^{(3)}$.

## Important Formulas

### Weyl-Kac Character Formula

For integrable $L(\lambda)$:
$$
\operatorname{ch}L(\lambda)=\frac{\sum_{w\in W}\epsilon(w)e^{w(\lambda+\rho)-\rho}}{\prod_{\alpha\in\widehat\Delta^+}(1-e^{-\alpha})^{\operatorname{mult}(\alpha)}}
$$

### Jacobi Triple Product (from $\widehat{\mathfrak{sl}}_2$)

$$
\prod_{n=1}^\infty(1-q^n)(1-zq^{n-1})(1-z^{-1}q^n)=\sum_{m\in\mathbb Z}(-1)^m z^m q^{m(m-1)/2}
$$

### Macdonald Identities

Specializations of affine denominator identities recover many classical product identities. The precise identity depends on the affine type, the specialization of the formal exponentials, and the normalization; no one-to-one type/product dictionary is asserted here.

## Related Concepts

- [[06 - Representation Theory/Concepts/Kac-Moody Algebras|Kac-Moody Algebras]]
- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]
- [[06 - Representation Theory/Concepts/Vertex Operator Algebras|Vertex Operator Algebras]]
- [[06 - Representation Theory/Concepts/Monstrous Moonshine|Monstrous Moonshine]]
- [[Modular Forms Hub|Modular Forms]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

Ten-source audit: Kac classifies affine generalized Cartan matrices, develops untwisted and twisted affine root systems, and proves that the untwisted algebra attached to a finite-dimensional simple complex Lie algebra is the central extension of its loop algebra together with the degree derivation. [S9, Chs. 6–8; Thm. 7.4, printed pp. 101–102, PDF pp. 124–125] He proves the Weyl–Kac formula for integrable highest-weight modules and the modular transformation law for normalized affine characters in the stated types and levels. [S9, Thm. 10.4, printed pp. 173–175, PDF pp. 196–198; Thm. 13.8, printed pp. 264–265, PDF pp. 287–288]

The note is `partially-verified`: the core algebraic and representation-theoretic claims are source-supported, while the WZW/string-theory applications are contextual. The $\widehat{\mathfrak{sl}}_2$ relation $[e_0,e_1]=0$ was false and has been replaced by the cubic Serre relations. The character statement now records vector-valued $SL_2(\mathbb Z)$ invariance rather than claiming each character is a scalar modular form for a congruence subgroup. All level and central-charge formulas depend on the invariant-form normalization.
