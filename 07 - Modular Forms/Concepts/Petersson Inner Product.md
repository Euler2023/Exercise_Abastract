---
title: Petersson Inner Product
topic: modular-forms
tags:
  - concept
  - definition
  - modular-forms
created: 2026-01-19
source: "Claus Sorensen, From Classical L-Functions to Modern Reciprocity Laws, Ch. 5, §§5.7.2–5.7.3, Props. 5.57 and 5.59, printed pp. 225–228, PDF pp. 234–237; §5.9, Thm. 5.102, printed pp. 262–264, PDF pp. 271–273"
source_status: partially-verified
status: not-started
---

# Petersson Inner Product

## Definition

> [!info] Definition (Petersson Inner Product)
> For [[07 - Modular Forms/Concepts/Cusp Forms|cusp forms]] $f, g \in S_k(\Gamma)$, the **Petersson inner product** is:
> $$
> \langle f, g \rangle = \iint_{\mathcal{F}_\Gamma} f(\tau) \overline{g(\tau)} y^k \, \frac{dx \, dy}{y^2}
> $$
> where $\tau = x + iy$ and $\mathcal{F}_\Gamma$ is a [[07 - Modular Forms/Concepts/Fundamental Domain|fundamental domain]] for $\Gamma$.

## Well-Definedness

The integrand $f(\tau)\overline{g(\tau)} y^k \cdot y^{-2}$ is:
1. **$\Gamma$-invariant**: transforms trivially under $\Gamma$
2. **Integrable**: cusp forms decay exponentially, ensuring convergence

## Key Properties

1. **Sesquilinear**: linear in $f$, conjugate-linear in $g$
2. **Hermitian**: $\langle f, g \rangle = \overline{\langle g, f \rangle}$
3. **Positive definite**: $\langle f, f \rangle > 0$ for $f \neq 0$
4. Makes $S_k$ a **finite-dimensional Hilbert space**

## Hecke Adjointness Is Level-Dependent

> [!abstract] Adjointness principle
> The double-coset action satisfies an adjunction relation of the form
> $$
> \langle f|_k g, h\rangle=\langle f,h|_k g^{-1}\rangle.
> $$
> For full level this specializes to the usual self-adjointness of the standard Hecke operators. At general level and with nebentypus, the adjoint may involve the inverse double coset and character factors, so a blanket assertion that every $T_n$ is self-adjoint is too strong.

> [!tip] Consequence
> - In a genuinely self-adjoint setting, Hecke eigenvalues are real and eigenspaces for distinct eigenvalues are orthogonal.
> - More generally, a commuting normal family can be simultaneously diagonalized.

## Orthogonality of Eigenforms

> [!abstract] Theorem
> In a setting where $T_n$ is normal (in particular, self-adjoint), if normalized Hecke eigenforms $f$ and $g$ have different $T_n$-eigenvalues, then:
> $$
> \langle f, g \rangle = 0
> $$

## Petersson Norm

> [!info] Definition
> The **Petersson norm** of $f$ is:
> $$
> \|f\|^2 = \langle f, f \rangle
> $$

The numerical value of a Petersson norm depends on the normalization of both the modular form and the quotient measure. No closed formula for $\|\Delta\|$ is asserted here without a separately checked normalization.

## Connection to L-functions

> [!abstract] Rankin–Selberg relation
> Unfolding an integral of $f(z)\overline{g(z)}y^k$ against a real-analytic Eisenstein series relates the Petersson pairing to a Rankin–Selberg Dirichlet series. In the diagonal case, the relevant Rankin–Selberg $L$-function has a simple pole whose residue is a normalization-dependent nonzero constant times $\langle f,f\rangle$.

## Period Integrals

The Petersson inner product relates to **period integrals**:
$$
\int_0^{i\infty} f(\tau) \tau^j d\tau
$$

These periods appear in:
- Algebraicity results for [[07 - Modular Forms/Concepts/L-functions|L-values]]
- [[07 - Modular Forms/Concepts/Elliptic Curves and Modularity|Modularity]] and BSD conjecture

## Spectral Theory

> [!abstract] Theorem (Spectral Decomposition)
> The space $S_k$ decomposes as an orthogonal direct sum:
> $$
> S_k = \bigoplus_f \mathbb{C} \cdot f
> $$
> where $f$ runs over normalized Hecke eigenforms.

## Examples

> [!example] Example 1: $S_{12}$
> $S_{12} = \mathbb{C} \cdot \Delta$ is one-dimensional, so $\Delta$ is automatically orthogonal to nothing.

> [!example] Example 2: $S_{24}$
> $S_{24}$ is 2-dimensional. The orthogonal basis consists of two Hecke eigenforms.

## Related Concepts

- [[07 - Modular Forms/Concepts/Cusp Forms|Cusp Forms]]
- [[07 - Modular Forms/Concepts/Hecke Operators|Hecke Operators]]
- [[07 - Modular Forms/Concepts/L-functions|L-functions]]
- [[07 - Modular Forms/Concepts/Fundamental Domain|Fundamental Domain]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

Sorensen defines a measure-normalized Petersson inner product, proves invariance and absolute convergence for cusp forms, identifies it isometrically with the corresponding automorphic $L^2$ pairing [Prop. 5.57], and proves the double-coset adjunction formula [Prop. 5.59]. His Rankin–Selberg chapter proves continuation and pole statements in its stated full-level normalization [Thm. 5.102]. The displayed definition in this note omits Sorensen's factor $1/\operatorname{meas}(\Gamma\backslash\mathbb H)$, an explicitly recorded normalization change. Claims about all levels/characters, exact Petersson norms, and general $L$-value formulas require additional hypotheses and sources. The note is `partially-verified`.
