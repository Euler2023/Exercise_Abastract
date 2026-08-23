---
title: Vertex Operator Algebras
topic: representation-theory
tags:
  - concept
  - definition
  - representation-theory
  - moonshine
  - infinite-dimensional
created: 2026-01-19
source: "Eleven-source boundary audit completed; Kac Ch. 14 covers vertex-operator constructions, not the general VOA axioms"
source_status: unverified
status: not-started
---

# Vertex Operator Algebras

## Introduction

Vertex operator algebras (VOAs) are algebraic structures that axiomatize the chiral algebras of two-dimensional conformal field theory. They provide the mathematical framework for understanding monstrous moonshine and play a central role in modern mathematical physics.

## Motivation

VOAs arose from several sources:
1. **Physics**: Chiral algebras in 2D CFT, string theory vertex operators
2. **Moonshine**: Frenkel-Lepowsky-Meurman's construction of the moonshine module
3. **Representation Theory**: Generalizing affine Lie algebra representations

## Definition

> [!info] Definition (Vertex Operator Algebra)
> A **vertex operator algebra** (VOA) is a tuple $(V, Y, \mathbf{1}, \omega)$ where:
>
> - $V = \bigoplus_{n \in \mathbb{Z}} V_n$ is a lower-truncated $\mathbb{Z}$-graded vector space: $V_n=0$ for all sufficiently negative $n$, and $\dim V_n < \infty$
> - $Y: V \to \text{End}(V)[[z, z^{-1}]]$ is the **state-field correspondence**
> - $\mathbf{1} \in V_0$ is the **vacuum vector**
> - $\omega \in V_2$ is the **conformal vector**

For $a \in V$, we write:
$$
Y(a, z) = \sum_{n \in \mathbb{Z}} a_{(n)} z^{-n-1}
$$

where $a_{(n)} \in \text{End}(V)$ are the **modes**.

## Axioms

### Vacuum Axioms

1. $Y(\mathbf{1}, z) = \text{id}_V$
2. $Y(a,z)\mathbf{1}\in a+zV[[z]]$ (creation property)
3. $a_{(n)}\mathbf{1} = 0$ for $n \geq 0$

### Translation

There exists $T: V \to V$ (translation operator) with:
- $T\mathbf{1} = 0$
- $[T, Y(a, z)] = \partial_z Y(a, z)$

### Locality and the Borcherds Identity

For $a, b \in V$, there exists $N \geq 0$ such that:
$$
(z - w)^N [Y(a, z), Y(b, w)] = 0
$$

Together with truncation, the vacuum axiom, and translation covariance, locality can be repackaged as a Jacobi/Borcherds identity. Its mode formula is convention-sensitive and is omitted here until checked against a dedicated VOA source.

### Conformal Structure

The conformal vector $\omega$ satisfies:
$$
Y(\omega, z) = \sum_{n \in \mathbb{Z}} L_n z^{-n-2}
$$

where $L_n$ satisfy the **Virasoro algebra**:
$$
[L_m, L_n] = (m - n)L_{m+n} + \frac{c}{12}(m^3 - m)\delta_{m+n,0}
$$

with central charge $c$.

Additionally:
- $L_0 a = na$ for $a \in V_n$ (grading)
- $L_{-1} = T$ (translation)

## Examples

### Heisenberg VOA

> [!example] Free Boson
> Built from a Heisenberg current $\alpha(z)$ with OPE $\alpha(z)\alpha(w)\sim (z-w)^{-2}$. A logarithmic free field $\phi$ may be introduced formally with $\partial\phi=\alpha$, but $\phi$ itself is not a vertex operator in the ordinary Heisenberg VOA.
>
> The Fock space $V = \mathbb{C}[\alpha_{-1}, \alpha_{-2}, \ldots]$ with $c = 1$.

### Lattice VOAs

> [!example] Lattice Construction
> For an even lattice $L$, construct:
> $$
> V_L = S(\mathfrak{h}^-) \otimes \mathbb{C}[L]
> $$
>
> where $\mathfrak{h}^- = \bigoplus_{n < 0} \mathfrak{h} \otimes t^n$ and $\mathfrak{h} = L \otimes \mathbb{C}$.
>
> Central charge: $c = \text{rank}(L)$.

### Affine VOAs

> [!example] WZW Models
> For affine Lie algebra $\widehat{\mathfrak{g}}_k$ at level $k$, the vacuum module:
> $$
> V_k(\mathfrak{g}) = U(\widehat{\mathfrak{g}}) \otimes_{U(\mathfrak{g}[t] \oplus \mathbb{C}c)} \mathbb{C}_k
> $$
>
> is a VOA with $c = \frac{k \dim \mathfrak{g}}{k + h^\vee}$.

### Virasoro VOA

> [!example] Minimal Models
> The Virasoro VOA $\text{Vir}_c$ with $c = 1 - \frac{6(p-q)^2}{pq}$ for coprime $p, q$.
>
> These are the chiral algebras of **minimal models**.

### The Monster VOA $V^\natural$

> [!example] Moonshine Module
> The **moonshine module** $V^\natural$ is a VOA with:
> - $c = 24$
> - $\text{Aut}(V^\natural) = \mathbb{M}$ (the Monster group)
> - $V^\natural = \bigoplus_{n \geq 0} V_n$ with $\dim V_0 = 1$, $\dim V_1 = 0$, and $\dim V_2 = 196884$; the term $q^{-1}$ in its character comes from the shift $q^{L_0-c/24}$ with $c=24$
>
> This is the central object in monstrous moonshine.

## Modules

> [!info] Definition (V-module)
> A **module** over VOA $V$ is a graded vector space $M = \bigoplus_n M_n$ with:
> $$
> Y_M: V \to \text{End}(M)[[z, z^{-1}]]
> $$
>
> satisfying appropriate axioms (Jacobi identity, vacuum, etc.).

### Types of Modules

| Type | Grading | Finite-dimensional? |
|------|---------|---------------------|
| Ordinary | $M = \bigoplus_{n \in \mathbb{Z}_{\geq 0}} M_{\lambda + n}$ | $\dim M_n < \infty$ |
| Admissible | $\mathbb{Z}_{\geq0}$-graded in the standard weak-module sense | Not required by the bare definition |
| Twisted | $g$-twisted for $g \in \text{Aut}(V)$ | Depends |

Logarithmic modules form a separate generalization in which $L_0$ need not act semisimply.

### Rationality

> [!info] Definition
> A VOA $V$ is called **rational** (in a common convention) if every admissible module is completely reducible. Finiteness of irreducible modules and categorical conclusions require additional hypotheses or theorems and should not be folded into the definition without specifying conventions.

Under suitable finiteness conditions—typically including rationality, $C_2$-cofiniteness, and standard grading assumptions—the category of ordinary modules can be a **modular tensor category**.

## Modular Properties

> [!abstract] Theorem (Zhu)
> Schematically, under rationality together with suitable cofiniteness and grading hypotheses, the irreducible characters
> $$
> \chi_M(\tau) = \text{tr}_M q^{L_0 - c/24}, \quad q = e^{2\pi i \tau}
> $$
>
> span a finite-dimensional space invariant under the modular group.

This explains why characters in moonshine are modular forms.

## Operator Product Expansion

The OPE encodes the algebraic structure:
$$
Y(a, z)Y(b, w) \sim \sum_{n \geq 0} \frac{Y(a_{(n)}b, w)}{(z-w)^{n+1}}
$$

For $a, b \in V_1$ (currents), this gives the Lie algebra structure.

## Applications

### Monstrous Moonshine
The moonshine module $V^\natural$ explains the connection between the Monster group and the $j$-function.

### Conformal Field Theory
VOAs formalize 2D CFT chiral algebras rigorously.

### Geometric Langlands
VOAs appear in the geometric Langlands program via chiral algebras on curves.

### String Theory
Worldsheet CFT is described by VOAs; GSO projection, orbifolds, etc. have VOA interpretations.

## Related Concepts

- [[06 - Representation Theory/Concepts/Monstrous Moonshine|Monstrous Moonshine]]
- [[06 - Representation Theory/Concepts/Affine Lie Algebras|Affine Lie Algebras]]
- [[06 - Representation Theory/Concepts/Monster Group|Monster Group]]
- [[06 - Representation Theory/Concepts/Kac-Moody Algebras|Kac-Moody Algebras]]
- [[Modular Forms Hub|Modular Forms]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

Eleven-source boundary audit: Kac, Ch. 14 constructs vertex operators for basic representations of affine Lie algebras [S9, printed p. 292, PDF p. 315], but it does not supply the general VOA axioms, module definitions, rationality criteria, or Zhu-type modularity theorem used here. Hall contains no VOA theory, and Getz–Hahn [S11] is an automorphic-representation text with no VOA development. The grading, creation axiom, Heisenberg example, Monster grading, and rationality/modularity hypotheses above have been corrected conservatively, but every substantive VOA claim remains `unverified` pending a dedicated authoritative source.
