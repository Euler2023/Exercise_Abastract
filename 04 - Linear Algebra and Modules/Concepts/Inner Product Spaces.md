---
title: Inner Product Spaces
aliases:
  - Orthogonal Complement
  - Orthogonal Space
topic: linear-algebra
tags:
  - concept
  - definition
  - linear-algebra
created: 2026-01-19
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, §§8.3–8.6, printed pp. 232–245, PDF pp. 244–257; Exs. 4.11 and 5.2, printed pp. 255–256, PDF pp. 267–268"
source_status: partially-verified
status: not-started
---

# Inner Product Spaces

## Definition

> [!info] Definition (Inner Product)
> An **inner product** on a [[04 - Linear Algebra and Modules/Concepts/Vector Spaces|vector space]] $V$ over $F$ ($\mathbb{R}$ or $\mathbb{C}$) is a function $\langle \cdot, \cdot \rangle: V \times V \to F$ satisfying:
> 1. **Linearity**: $\langle \alpha u + \beta v, w \rangle = \alpha \langle u, w \rangle + \beta \langle v, w \rangle$
> 2. **Conjugate symmetry**: $\langle u, v \rangle = \overline{\langle v, u \rangle}$
> 3. **Positive definiteness**: $\langle v, v \rangle \geq 0$, with equality iff $v = 0$

> [!info] Definition (Inner Product Space)
> A vector space equipped with an inner product is called an **inner product space** (or pre-Hilbert space).

This note uses the **first-variable-linear** complex convention. The linked [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]] note uses the conjugate-linear-first convention; exchanging the arguments converts between them. Projection coefficients must follow the chosen convention.

## Induced Structures

> [!info] Definition (Norm)
> $\|v\| = \sqrt{\langle v, v \rangle}$

> [!info] Definition (Distance)
> $d(u, v) = \|u - v\|$

> [!info] Definition (Angle)
> $\cos \theta = \frac{\langle u, v \rangle}{\|u\| \|v\|}$ (for real spaces)

## Key Properties

> [!abstract] Cauchy-Schwarz Inequality
> $$
> |\langle u, v \rangle| \leq \|u\| \|v\|
> $$

> [!abstract] Triangle Inequality
> $$
> \|u + v\| \leq \|u\| + \|v\|
> $$

> [!abstract] Parallelogram Law
> $$
> \|u + v\|^2 + \|u - v\|^2 = 2\|u\|^2 + 2\|v\|^2
> $$

## Orthogonality

> [!info] Definition (Orthogonal)
> Vectors $u, v$ are **orthogonal** if $\langle u, v \rangle = 0$, written $u \perp v$.

> [!info] Definition (Orthonormal Basis)
> A basis $\{e_1, \ldots, e_n\}$ is **orthonormal** if $\langle e_i, e_j \rangle = \delta_{ij}$.

> [!abstract] Gram-Schmidt Process
> Any basis can be orthonormalized: given $\{v_1, \ldots, v_n\}$, produce orthonormal $\{e_1, \ldots, e_n\}$.

## Examples

> [!example] Example 1: Euclidean space
> $\mathbb{R}^n$ with $\langle x, y \rangle = \sum_{i=1}^n x_i y_i$ (dot product).

> [!example] Example 2: Complex space
> $\mathbb{C}^n$ with $\langle x, y \rangle = \sum_{i=1}^n x_i \overline{y_i}$.

> [!example] Example 3: Function space
> $L^2[a,b]$ with $\langle f, g \rangle = \int_a^b f(x)\overline{g(x)} dx$.

> [!example] Example 4: Matrix space
> $M_n(\mathbb{C})$ with $\langle A, B \rangle = \text{tr}(B^*A)$ (Frobenius inner product).

## Orthogonal Complement

> [!info] Definition (Orthogonal Complement)
> Let $B$ be a [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|symmetric bilinear or Hermitian form]] on $V$, and let $W$ be a [[04 - Linear Algebra and Modules/Concepts/Subspaces|subspace]] of $V$. The **orthogonal complement**, called the **orthogonal space** by Artin, is
>
> $$
> W^\perp = \{v \in V : B(v,w)=0 \text{ for all } w\in W\}.
> $$

Read $v\perp W$ as “$v$ is orthogonal to every vector in $W$.” The notation $w^\perp$ for a single vector means $(\operatorname{span}\{w\})^\perp$. To compute $W^\perp$, impose $B(v,w_i)=0$ for each basis vector $w_i$ of $W$. Linearity or conjugate linearity extends these equations to every vector in $W$.

### Identities and hypotheses

- **Any symmetric bilinear or Hermitian form.** Taking orthogonal complements reverses inclusions, $(W_1+W_2)^\perp=W_1^\perp\cap W_2^\perp$, and $W\subseteq(W^\perp)^\perp$. The inclusion follows from symmetry or conjugate symmetry. These facts also hold for degenerate forms.
- **Nondegenerate form on a finite-dimensional $V$.** Then $\dim W^\perp=\dim V-\dim W$ and $(W^\perp)^\perp=W$. The equations for a basis of $W$ are independent by nondegeneracy, so their common kernel has codimension $\dim W$. Applying the dimension formula twice makes $W\subseteq(W^\perp)^\perp$ an equality.
- **Orthogonal direct sum in finite dimension.** The identity $V=W\oplus W^\perp$ holds exactly when the restriction $B|_{W\times W}$ is nondegenerate. Its radical is $W\cap W^\perp$. If the restriction is nondegenerate, its Gram matrix is invertible, so for each $v\in V$ the equations $B(v-u,w_i)=0$ determine a unique $u\in W$. Thus $v=u+(v-u)$ lies in $W+W^\perp$. Positive definiteness guarantees this condition for every $W$.

> [!example] The complement depends on the form
> Take $W=\operatorname{span}\{(1,1)\}$ in $\mathbb R^2$. For the dot product, $x+y=0$ gives $W^\perp=\operatorname{span}\{(1,-1)\}$. For the nondegenerate form $B((x,y),(s,t))=xs-yt$, the equation is $x-y=0$, so $W^\perp=W$. The second form is degenerate on $W$, and $W+W^\perp=W$.

## Orthogonal Projection

If the form is nondegenerate on a subspace $W$ and $(w_1,\ldots,w_k)$ is an orthogonal basis of $W$, then

$$
\pi_W(v)=\sum_{i=1}^k \frac{\langle v,w_i\rangle}{\langle w_i,w_i\rangle}w_i.
$$

For an orthonormal basis this simplifies to $\pi_W(v)=\sum_i\langle v,w_i\rangle w_i$. Indeed, first-variable linearity and orthogonality give $\langle\pi_W(v),w_j\rangle=\langle v,w_j\rangle$, so $v-\pi_W(v)$ is orthogonal to $W$. The Gram-Schmidt process repeatedly subtracts such projections to construct an orthogonal or orthonormal basis.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Vector Spaces|Vector Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]] (spectral theorem)
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]] (adjoint operators)
- [[04 - Linear Algebra and Modules/Concepts/Perfect Pairings over Finite Local Rings|Perfect Pairings over Finite Local Rings]]


## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE any(file.outlinks, (outlink) => meta(outlink).path = this.file.path)
```

## Source and Proof Status

This note has a named source with printed-page and physical-PDF-page provenance, and the cited bounded slice was checked for the core definitions or results used here. Because the note may also contain independent exposition or claims beyond that slice, its overall status remains partially verified unless a claim-level audit is recorded.

Artin defines $W^\perp$ in [S1, Ch. 8, §8.4, (8.4.1), printed p. 236, PDF p. 248], proves the direct-sum criterion in Theorem 8.4.5(a) [printed p. 237, PDF p. 249], and gives the positive-definite case in Corollary 8.5.1 [printed p. 242, PDF p. 254]. Exercises 4.11 and 5.2 [printed pp. 255–256, PDF pp. 267–268] ask for the basic identities and the Euclidean double-complement identity. The rank argument and the two-form example above are independent derivations.

The projection formula was corrected on 2026-09-29 to match this note's first-variable-linear convention; its verification above is an independent derivation.
