---
title: Weyl Character Formula
topic: representation-theory
tags:
  - concept
  - definition
  - representation-theory
  - lie-theory
  - characters
created: 2026-01-19
---

# Weyl Character Formula

## Introduction

The Weyl character formula is one of the most important results in representation theory. It provides an explicit formula for the character of any finite-dimensional irreducible representation of a semisimple Lie algebra in terms of the Weyl group and root system.

## Setup

Let $\mathfrak{g}$ be a semisimple Lie algebra with:
- Cartan subalgebra $\mathfrak{h}$
- Root system $\Delta \subset \mathfrak{h}^*$
- Positive roots $\Delta^+$
- Simple roots $\Pi = \{\alpha_1, \ldots, \alpha_n\}$
- Weyl group $W$
- Weyl vector $\rho = \frac{1}{2}\sum_{\alpha \in \Delta^+} \alpha$

## The Formula

> [!abstract] Theorem (Weyl Character Formula)
> For a finite-dimensional irreducible representation $L(\lambda)$ with highest weight $\lambda$:
> $$\text{ch } L(\lambda) = \frac{\sum_{w \in W} \epsilon(w) e^{w(\lambda + \rho)}}{\sum_{w \in W} \epsilon(w) e^{w(\rho)}}$$
>
> where $\epsilon(w) = (-1)^{\ell(w)}$ is the sign of $w$.

### Alternative Forms

**Product form** (denominator identity):
$$\text{ch } L(\lambda) = \frac{\sum_{w \in W} \epsilon(w) e^{w(\lambda + \rho)}}{\prod_{\alpha \in \Delta^+} (e^{\alpha/2} - e^{-\alpha/2})}$$

**Formal exponential notation**:
$$\text{ch } L(\lambda) = \frac{\sum_{w \in W} \epsilon(w) e^{w(\lambda + \rho) - \rho}}{\prod_{\alpha \in \Delta^+} (1 - e^{-\alpha})}$$

## The Weyl Denominator Formula

> [!info] Theorem (Weyl Denominator Identity)
> $$\sum_{w \in W} \epsilon(w) e^{w(\rho)} = e^\rho \prod_{\alpha \in \Delta^+} (1 - e^{-\alpha}) = \prod_{\alpha \in \Delta^+} (e^{\alpha/2} - e^{-\alpha/2})$$

This identity relates the Weyl group sum to a product over positive roots.

### Equivalent Form

$$\prod_{\alpha \in \Delta^+} (1 - e^{-\alpha}) = \sum_{w \in W} \epsilon(w) e^{w(\rho) - \rho}$$

## Example: $\mathfrak{sl}_2$

For $\mathfrak{sl}_2(\mathbb{C})$:
- Single positive root $\alpha$
- $\rho = \alpha/2$
- $W = \{1, s_\alpha\} \cong \mathbb{Z}/2\mathbb{Z}$
- Highest weight $\lambda = n\alpha/2$ for $n \in \mathbb{Z}_{\geq 0}$

### Denominator Formula

$$e^{\alpha/2} - e^{-\alpha/2} = e^{\rho} - e^{s_\alpha(\rho)} = e^{\rho}(1 - e^{-\alpha})$$

Setting $z = e^{\alpha/2}$:
$$z - z^{-1}$$

### Character Formula

For the $(n+1)$-dimensional representation $V_n$:
$$\text{ch } V_n = \frac{e^{(n+1)\alpha/2} - e^{-(n+1)\alpha/2}}{e^{\alpha/2} - e^{-\alpha/2}} = \frac{z^{n+1} - z^{-(n+1)}}{z - z^{-1}}$$

This equals $z^n + z^{n-2} + \cdots + z^{-n}$, confirming weights $n, n-2, \ldots, -n$.

## Example: $\mathfrak{sl}_3$

For $\mathfrak{sl}_3(\mathbb{C})$:
- Positive roots: $\alpha_1, \alpha_2, \alpha_1 + \alpha_2$
- $\rho = \alpha_1 + \alpha_2$
- $W = S_3$ (6 elements)

### Denominator

$$\prod_{\alpha \in \Delta^+}(e^{\alpha/2} - e^{-\alpha/2}) = \sum_{w \in S_3} \epsilon(w) e^{w(\rho)}$$

Setting $x = e^{\alpha_1/2}$, $y = e^{\alpha_2/2}$:
$$(x - x^{-1})(y - y^{-1})(xy - x^{-1}y^{-1})$$

## Weyl Dimension Formula

> [!abstract] Corollary (Weyl Dimension Formula)
> Taking the limit as formal exponentials approach 1:
> $$\dim L(\lambda) = \prod_{\alpha \in \Delta^+} \frac{\langle \lambda + \rho, \alpha \rangle}{\langle \rho, \alpha \rangle}$$

### Example for $\mathfrak{sl}_2$

$$\dim V_n = \frac{\langle n\alpha/2 + \alpha/2, \alpha \rangle}{\langle \alpha/2, \alpha \rangle} = \frac{(n+1)\langle \alpha, \alpha \rangle / 2}{\langle \alpha, \alpha \rangle / 2} = n + 1$$

## Connection to Infinite-Dimensional Algebras

### Weyl-Kac Formula

For Kac-Moody algebras, the formula generalizes:

> [!abstract] Theorem (Weyl-Kac Character Formula)
> For an integrable highest weight module $L(\lambda)$ over a Kac-Moody algebra:
> $$\text{ch } L(\lambda) = \frac{\sum_{w \in W} \epsilon(w) e^{w(\lambda + \rho) - \rho}}{\prod_{\alpha \in \Delta^+} (1 - e^{-\alpha})^{\text{mult}(\alpha)}}$$

The key difference: imaginary roots can have multiplicity $> 1$.

### Macdonald-Kac Denominator Identity

> [!abstract] Theorem
> $$\prod_{\alpha \in \Delta^+} (1 - e^{-\alpha})^{\text{mult}(\alpha)} = \sum_{w \in W} \epsilon(w) e^{w(\rho) - \rho}$$

## Applications to Classical Identities

### Jacobi Triple Product

From the denominator identity for $\widehat{\mathfrak{sl}}_2$:

$$\prod_{n=1}^\infty (1 - q^n)(1 - zq^{n-1})(1 - z^{-1}q^n) = \sum_{m \in \mathbb{Z}} (-1)^m z^m q^{m(m+1)/2}$$

### Euler's Pentagonal Number Theorem

Setting $z = 1$ in a related identity:

$$\prod_{n=1}^\infty (1 - q^n) = \sum_{k \in \mathbb{Z}} (-1)^k q^{k(3k-1)/2}$$

The exponents $k(3k-1)/2$ are **pentagonal numbers**.

### Jacobi's Triple Product (Standard Form)

$$\prod_{n=1}^\infty (1 - q^{2n})(1 + zq^{2n-1})(1 + z^{-1}q^{2n-1}) = \sum_{m \in \mathbb{Z}} z^m q^{m^2}$$

This is the **Jacobi theta function** $\theta_3(z, q)$.

## Proof Outline

### Key Steps

1. **Verma modules**: Start with $M(\lambda) = U(\mathfrak{g}) \otimes_{U(\mathfrak{b})} \mathbb{C}_\lambda$
2. **BGG resolution**: $L(\lambda)$ has a resolution by Verma modules
3. **Character of Verma**: $\text{ch } M(\mu) = \frac{e^\mu}{\prod_{\alpha > 0}(1 - e^{-\alpha})}$
4. **Alternating sum**: Use the resolution to get the Weyl formula

### BGG Resolution

> [!info] Theorem (Bernstein-Gelfand-Gelfand)
> There is an exact sequence:
> $$0 \to \bigoplus_{w: \ell(w)=n} M(w \cdot \lambda) \to \cdots \to \bigoplus_{w: \ell(w)=1} M(w \cdot \lambda) \to M(\lambda) \to L(\lambda) \to 0$$
>
> where $w \cdot \lambda = w(\lambda + \rho) - \rho$ is the **dot action**.

## Related Formulas

### Freudenthal Formula

Recursively computes weight multiplicities:
$$(\|\lambda + \rho\|^2 - \|\mu + \rho\|^2) m_\mu = 2\sum_{\alpha > 0} \sum_{k \geq 1} \langle \mu + k\alpha, \alpha \rangle m_{\mu + k\alpha}$$

### Kostant Multiplicity Formula

$$m_\mu = \sum_{w \in W} \epsilon(w) P(w(\lambda + \rho) - (\mu + \rho))$$

where $P$ is the **Kostant partition function**.

## Related Concepts

- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[06 - Representation Theory/Concepts/Root Systems|Root Systems]]
- [[06 - Representation Theory/Concepts/Weights and Weight Spaces|Weights and Weight Spaces]]
- [[06 - Representation Theory/Concepts/Semisimple Lie Algebras|Semisimple Lie Algebras]]
- [[06 - Representation Theory/Concepts/Kac-Moody Algebras|Kac-Moody Algebras]]
- [[06 - Representation Theory/Concepts/Affine Lie Algebras|Affine Lie Algebras]]
- [[07 - Modular Forms/Concepts/Theta Functions|Theta Functions]]
- [[07 - Modular Forms/Concepts/Eta Function|Eta Function]]
