---
title: BSD Conjecture
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
  - conjecture
created: 2026-01-19
source: "Claus Sorensen, From Classical L-Functions to Modern Reciprocity Laws, Ch. 1, §1.3.3, Remark 1.88, printed p. 40, PDF p. 52"
source_status: partially-verified
status: not-started
---

# Birch and Swinnerton-Dyer Conjecture

## Statement

> [!abstract] BSD Conjecture (Millennium Problem)
> For an elliptic curve $E/\mathbb{Q}$:
>
> **Part 1 (Rank):**
> $$
> \text{rank}(E(\mathbb{Q})) = \text{ord}_{s=1} L(E, s)
> $$
>
> **Part 2 (Leading coefficient):**
> $$
> \lim_{s \to 1} \frac{L(E, s)}{(s-1)^r} = \frac{\Omega_E \cdot \text{Reg}_E \cdot \prod_p c_p \cdot \#\text{Ш}(E/\mathbb{Q})}{(\#E(\mathbb{Q})_{\text{tors}})^2}
> $$

## The Terms

| Symbol | Name | Description |
|--------|------|-------------|
| $r$ | Rank | $= \text{rank}(E(\mathbb{Q}))$ |
| $\Omega_E$ | Real period | $\int_{E(\mathbb{R})} \omega$ |
| $\text{Reg}_E$ | Regulator | Determinant of height pairing matrix |
| $c_p$ | Tamagawa numbers | Local factors at bad primes |
| $\text{Ш}$ | Sha | Tate-Shafarevich group |

## What's Known

> [!abstract] Theorem (Gross-Zagier, Kolyvagin)
> If $\text{ord}_{s=1} L(E, s) \leq 1$, then:
> $$
> \text{rank}(E(\mathbb{Q})) = \text{ord}_{s=1} L(E, s)
> $$
> and $\text{Ш}(E/\mathbb{Q})$ is finite.

| Analytic rank | Algebraic rank | Status |
|---------------|----------------|--------|
| 0 | 0 | Proved |
| 1 | 1 | Proved |
| $\geq 2$ | $\geq 2$ | Open! |

## The L-function

$$
L(E, s) = \prod_{p \nmid N} \frac{1}{1 - a_p p^{-s} + p^{1-2s}} \cdot \prod_{p | N} (\text{local factors})
$$

where $a_p = p + 1 - \#E(\mathbb{F}_p)$.

> [!info] Functional Equation
> $\Lambda(E, s) = w \cdot \Lambda(E, 2-s)$ where $w = \pm 1$ is the **root number**.

The functional equation determines the parity of the **analytic** order of vanishing. BSD predicts that this is also the parity of the algebraic rank.

## Examples

> [!example] Example 1: $E: y^2 = x^3 - x$ (rank 0)
> - $L(E, 1) = 0.6555... \neq 0$
> - $\text{rank} = 0$ ✓
> - $\#\text{Ш} = 1$ (trivial)

> [!example] Example 2: $E: y^2 = x^3 - 2$ (rank 1)
> - $L(E, 1) = 0$, $L'(E, 1) \neq 0$
> - $\text{rank} = 1$ ✓
> - Generator: $(3, 5)$

> [!example] Example 3: Congruent number curve
> $E_n: y^2 = x^3 - n^2 x$
> For a positive integer $n$, the classical congruent-number criterion gives
> $$
> n\text{ is congruent}\iff\operatorname{rank}E_n(\mathbb Q)>0.
> $$
> BSD predicts that these conditions are also equivalent to $L(E_n,1)=0$; the second equivalence must not be presented here as an unconditional consequence of the definition.

## Computational Evidence

Large databases and numerical calculations provide extensive evidence for BSD, but this note previously stated a conductor cutoff and curve count without a traceable dataset, version, or citation. Those numerical bounds have been removed pending a reproducible computation source.

## Sha (Tate-Shafarevich Group)

> [!info] Definition
> $$
> \text{Ш}(E/K) = \ker\left(H^1(K, E) \to \prod_v H^1(K_v, E)\right)
> $$

This measures the failure of local-global principle for torsors.

> [!warning] Major Open Problem
> Is $\text{Ш}(E/K)$ always finite?

BSD predicts: Yes! And gives its order.

## Related Conjectures

> [!abstract] Generalized BSD
> Similar conjectures exist for:
> - Abelian varieties (Tate)
> - Motives (Bloch-Kato)
> - Automorphic L-functions (general Langlands)

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves]]
- [[08 - Arithmetic Geometry/Concepts/Mordell-Weil Theorem|Mordell-Weil Theorem]]
- [[08 - Arithmetic Geometry/Concepts/Heights|Heights]]
- [[07 - Modular Forms/Concepts/L-functions|L-functions]]
- [[08 - Arithmetic Geometry/Concepts/Galois Representations|Galois Representations]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

Sorensen explicitly states the BSD rank conjecture $\operatorname{ord}_{s=1}L(s,E)=\operatorname{rank}E(K)$ for an elliptic curve over a number field, says the conjecture remains open even over $\mathbb Q$, and records that a conjectural leading Taylor coefficient involves arithmetic invariants including $\Sha(E)$, whose finiteness is not known in general. This verifies the basic rank formulation and its conjectural/open status. The exact leading-coefficient formula and normalization, the Gross–Zagier–Kolyvagin rank-$0/1$ theorem, root-number parity assertions, displayed numerical examples, and generalized BSD claims are not established by the checked page and remain external or unrecomputed. The note is `partially-verified`.
