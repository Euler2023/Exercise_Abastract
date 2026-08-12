---
title: "Hilbert's Theorem 90"
aliases:
  - Hilbert 90
  - Multiplicative Hilbert 90
  - Additive Hilbert 90
topic: galois-theory
tags:
  - concept
  - theorem
  - galois-theory
  - cyclic-extensions
  - norm-and-trace
created: 2026-08-13
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VI, §6, Theorems 6.1 and 6.3, printed pp. 288–290, PDF pp. 303–305"
---

# Hilbert's Theorem 90

## Setup

Let $K/k$ be a cyclic Galois extension of degree $n$, and choose a generator

$$
G=\operatorname{Gal}(K/k)=\langle\sigma\rangle.
$$

For $x\in K$, its norm and trace are

$$
N_{K/k}(x)=\prod_{i=0}^{n-1}\sigma^i(x),
\qquad
\operatorname{Tr}_{K/k}(x)=\sum_{i=0}^{n-1}\sigma^i(x).
$$

Hilbert's Theorem 90 identifies exactly which elements have norm $1$. Its additive analogue identifies exactly which elements have trace $0$.

## Multiplicative Hilbert 90

> [!abstract] Theorem (multiplicative form)
> For $\beta\in K^\times$, the following are equivalent:
>
> 1. $N_{K/k}(\beta)=1$;
> 2. there exists $\alpha\in K^\times$ such that
>
>    $$
>    \beta=\frac{\alpha}{\sigma(\alpha)}.
>    $$

Lang uses the quotient $\alpha/\sigma(\alpha)$. The frequently used convention $\sigma(\gamma)/\gamma$ is equivalent: take $\gamma=\alpha^{-1}$.

### Proof

If $\beta=\alpha/\sigma(\alpha)$, then the conjugate factors telescope:

$$
N_{K/k}(\beta)
=\prod_{i=0}^{n-1}
\frac{\sigma^i(\alpha)}{\sigma^{i+1}(\alpha)}
=1.
$$

Conversely, suppose $N_{K/k}(\beta)=1$. Define

$$
c_0=1,
\qquad
c_j=\prod_{i=0}^{j-1}\sigma^i(\beta)
\quad (1\leq j\leq n).
$$

Thus $c_n=1$. For $\theta\in K$, set

$$
A(\theta)=\sum_{j=0}^{n-1}c_j\sigma^j(\theta).
$$

The distinct automorphisms $1,\sigma,\ldots,\sigma^{n-1}$ are linearly independent over $K$. Since every $c_j$ is nonzero, $A$ is not the zero map. Choose $\theta$ such that

$$
\alpha=A(\theta)\ne0.
$$

The relation

$$
c_{j+1}=\beta\sigma(c_j)
$$

and the identities $c_n=1$ and $\sigma^n=1$ give

$$
\beta\sigma(\alpha)
=\sum_{j=0}^{n-1}c_{j+1}\sigma^{j+1}(\theta)
=\alpha,
$$

where the indices in the last sum are read cyclically modulo $n$. Hence

$$
\beta=\frac{\alpha}{\sigma(\alpha)}.
$$

This proves the multiplicative form.

## Additive Hilbert 90

> [!abstract] Theorem (additive form)
> For $\beta\in K$, the following are equivalent:
>
> 1. $\operatorname{Tr}_{K/k}(\beta)=0$;
> 2. there exists $\alpha\in K$ such that
>
>    $$
>    \beta=\alpha-\sigma(\alpha).
>    $$

### Proof

If $\beta=\alpha-\sigma(\alpha)$, summing the conjugates telescopes and gives

$$
\operatorname{Tr}_{K/k}(\beta)=0.
$$

Conversely, suppose $\operatorname{Tr}_{K/k}(\beta)=0$. Because $K/k$ is finite and separable, its trace map is not the zero map. Choose $\theta\in K$ with

$$
T=\operatorname{Tr}_{K/k}(\theta)\ne0.
$$

For $1\leq j\leq n-1$, put

$$
S_j=\sum_{i=0}^{j-1}\sigma^i(\beta),
$$

and define

$$
\alpha=\frac1T\sum_{j=1}^{n-1}S_j\sigma^j(\theta).
$$

Since $S_n=\operatorname{Tr}_{K/k}(\beta)=0$ and

$$
\sigma(S_j)=S_{j+1}-\beta,
$$

direct subtraction yields

$$
\alpha-\sigma(\alpha)
=\frac{\beta}{T}\sum_{j=1}^{n}\sigma^j(\theta)
=\beta.
$$

This proves the additive form.

## Intuition and Cohomological Form

The two theorems say that the only obstruction visible from norm or trace is the complete obstruction:

$$
\ker N_{K/k}
=\left\{\frac{\alpha}{\sigma(\alpha)}:\alpha\in K^\times\right\},
$$

and

$$
\ker\operatorname{Tr}_{K/k}
=\{\alpha-\sigma(\alpha):\alpha\in K\}.
$$

In group-cohomological notation, these are the vanishing statements

$$
H^1(G,K^\times)=0
\qquad\text{and}\qquad
H^1(G,K)=0.
$$

The elementary statements and proofs above do not require group cohomology.

## Applications

### Kummer Generators

Assume $\operatorname{char}k\nmid n$ and $k$ contains a primitive $n$-th root of unity $\zeta_n$. Since

$$
N_{K/k}(\zeta_n^{-1})=\zeta_n^{-n}=1,
$$

multiplicative Hilbert 90 gives $\alpha\in K^\times$ with

$$
\frac{\alpha}{\sigma(\alpha)}=\zeta_n^{-1}.
$$

Thus $\sigma(\alpha)=\zeta_n\alpha$, so $\alpha^n\in k$. This is the key eigenvector step in the cyclic case of [[05 - Galois Theory/Concepts/Kummer Extensions|Kummer theory]].

### Artin–Schreier Generators

Assume $\operatorname{char}k=p$ and $[K:k]=p$. Then

$$
\operatorname{Tr}_{K/k}(-1)=-p=0.
$$

Additive Hilbert 90 gives $\alpha\in K$ such that

$$
-1=\alpha-\sigma(\alpha),
$$

or $\sigma(\alpha)=\alpha+1$. It follows that $\alpha^p-\alpha\in k$, producing an [[05 - Galois Theory/Concepts/Artin-Schreier Extensions|Artin–Schreier generator]].

## Examples

> [!example] The extension $\mathbb C/\mathbb R$
> Let $\sigma$ be complex conjugation. If $z\in\mathbb C^\times$ satisfies $z\overline z=1$, then Hilbert 90 gives
>
> $$
> z=\frac{\alpha}{\overline\alpha}.
> $$
>
> This is explicit: take $\alpha=1+z$ when $z\ne-1$, and take $\alpha=i$ when $z=-1$.

> [!example] Finite fields
> For $K=\mathbb F_{q^n}$ and $k=\mathbb F_q$, Frobenius $\sigma(x)=x^q$ generates the Galois group. Additive Hilbert 90 says
>
> $$
> \operatorname{Tr}_{\mathbb F_{q^n}/\mathbb F_q}(\beta)=0
> \quad\Longleftrightarrow\quad
> \beta=\alpha-\alpha^q
> $$
>
> for some $\alpha\in\mathbb F_{q^n}$.

## Key Properties

1. The cyclic hypothesis includes the choice of a generator $\sigma$; changing the generator changes the displayed coboundary but not the theorem.
2. The multiplicative form concerns norm-one elements of $K^\times$.
3. The additive form concerns trace-zero elements of $K$.
4. The theorem is constructive once an element $\theta$ making the relevant averaging expression nonzero is chosen.
5. Multiplicative Hilbert 90 underlies cyclic Kummer constructions, while additive Hilbert 90 underlies the Artin–Schreier classification in characteristic $p$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]
- [[05 - Galois Theory/Concepts/Kummer Extensions|Kummer Extensions]]
- [[05 - Galois Theory/Concepts/Artin-Schreier Extensions|Artin–Schreier Extensions]]
- [[05 - Galois Theory/Concepts/Automorphisms|Field Automorphisms]]
- [[05 - Galois Theory/Concepts/Finite Fields Galois|Galois Theory of Finite Fields]]
- [[03 - Field Theory/Concepts/Separable Extensions|Separable Extensions]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

- The multiplicative statement and proof are source-grounded in [S2, Ch. VI, §6, Thm. 6.1, printed pp. 288–289, PDF pp. 303–304].
- The additive statement and proof are source-grounded in [S2, Ch. VI, §6, Thm. 6.3, printed p. 290, PDF p. 305]. The displayed partial-sum computation expands Lang's proof.
- The multiplicative proof imports the linear independence of distinct field automorphisms. The additive proof imports the nonvanishing of the trace map for a finite separable extension; both are standard consequences of Artin's theorem on characters.
- The Kummer and Artin–Schreier paragraphs are consequences developed immediately after Hilbert 90 in Lang, at Theorems 6.2 and 6.4 respectively.
- No theorem under the name “Hilbert 90” was located in the local Michael Artin, *Algebra*, 2nd ed.; Lang's *Algebraic Number Theory* is not used as a source for this note.

