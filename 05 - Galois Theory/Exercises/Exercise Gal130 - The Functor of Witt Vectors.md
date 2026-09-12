---
title: "Exercise Gal130: The Functor of Witt Vectors"
topic: galois-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - galois-theory
  - witt-vectors
  - formal-power-series
  - mobius-inversion
  - functoriality
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VI, Galois Theory, Exercise 46, printed p. 330, PDF p. 345"
created: 2026-09-12
---

# Exercise Gal130: The Functor of Witt Vectors

## Problem Statement

> [!question]
> Let $x_1, x_2, \dots$ be a sequence of algebraically independent elements over the integers $\mathbf{Z}$. For each integer $n \ge 1$ define
> $$
> x^{(n)} = \sum_{d \mid n} d x_d^{n/d}.
> $$
> Show that $x_n$ can be expressed in terms of $x^{(d)}$ for $d \mid n$, with rational coefficients.
> Using vector notation, we call $(x_1, x_2, \dots)$ the Witt components of the vector $x$, and call $(x^{(1)}, x^{(2)}, \dots)$ its ghost components. We call $x$ a **Witt vector**.
> Define the power series
> $$
> f_x(t) = \prod_{n \ge 1} (1 - x_n t^n).
> $$
> Show that
> $$
> -t \frac{d}{dt} \log f_x(t) = \sum_{n \ge 1} x^{(n)} t^n.
> $$
> [By $\frac{d}{dt} \log f(t)$ we mean $f'(t)/f(t)$ if $f(t)$ is a power series, and the derivative $f'(t)$ is taken formally.]
> If $x, y$ are two Witt vectors, define their sum and product componentwise with respect to the ghost components, i.e.
> $$
> (x + y)^{(n)} = x^{(n)} + y^{(n)}.
> $$
> What is $(x + y)_n$? Well, show that
> $$
> f_x(t) f_y(t) = \prod_{n \ge 1} (1 - (x + y)_n t^n) = f_{x+y}(t).
> $$
> Hence $(x + y)_n$ is a polynomial with integer coefficients in $x_1, y_1, \dots, x_n, y_n$. Also show that
> $$
> f_{xy}(t) = \prod_{d, e \ge 1} (1 - x_d^{m/d} y_e^{m/e} t^m)^{de/m}
> $$
> where $m = \operatorname{lcm}(d, e)$ and $d, e$ range over all integers $\ge 1$. Thus $(xy)_n$ is also a polynomial in $x_1, y_1, \dots, x_n, y_n$ with integer coefficients. The above arguments are due to Witt (oral communication) and differ from those of his original paper.
> If $A$ is a commutative ring, then taking a homomorphic image of the polynomial ring over $\mathbf{Z}$ into $A$, we see that we can define addition and multiplication of Witt vectors with components in $A$, and that these Witt vectors form a ring $W(A)$. Show that $W$ is a functor, i.e. that any ring homomorphism $\varphi$ of $A$ into a commutative ring $A'$ induces a homomorphism $W(\varphi): W(A) \to W(A')$.

## Hints

> [!hint]- Weak Hint
> Express the logarithmic derivative of a product as a sum of logarithmic derivatives of each factor $1 - x_n t^n$, and use the geometric series for $(1 - u)^{-1}$.

> [!hint]- Moderate Hint
> - For the first part, notice that $x^{(n)} = n x_n + \text{terms in } x_d \ (d < n)$, so invert by induction or use Möbius inversion.
> - For $-t \frac{d}{dt} \log(1 - x_n t^n)$, compute $\frac{n x_n t^n}{1 - x_n t^n} = \sum_{k=1}^\infty n x_n^k t^{nk}$, and collect coefficients of $t^n$.

> [!hint]- Strong Hint
> Since the logarithmic derivative is additive: $-t \frac{d}{dt} \log(f_x f_y) = -t \frac{d}{dt} \log f_x - t \frac{d}{dt} \log f_y = \sum (x^{(n)} + y^{(n)}) t^n$. By uniqueness of the expansion of a formal power series starting with 1 into an infinite product $\prod (1 - c_n t^n)$, the coefficients $(x+y)_n$ are determined recursively and lie in $\mathbf{Z}[x, y]$.

## Solution

> [!success]- Complete Derivation
> Let $x_1, x_2, \dots$ be algebraically independent indeterminates over $\mathbf{Z}$.
>
> ---
>
> ### 1. Expressing $x_n$ in Terms of Ghost Components
> The $n$-th ghost component is defined by:
> $$
> x^{(n)} = \sum_{d \mid n} d x_d^{n/d} = n x_n + \sum_{\substack{d \mid n \\ d < n}} d x_d^{n/d}.
> $$
> Rearranging gives:
> $$
> x_n = \frac{1}{n} \left( x^{(n)} - \sum_{\substack{d \mid n \\ d < n}} d x_d^{n/d} \right).
> $$
> - For $n = 1$: $x_1 = x^{(1)}$.
> - For $n = 2$: $x_2 = \frac{1}{2}(x^{(2)} - x_1^2) = \frac{1}{2}(x^{(2)} - (x^{(1)})^2)$.
> By strong induction on $n$, each $x_n$ is expressed as a polynomial in $\{x^{(d)} \mid d \mid n\}$ with coefficients in $\mathbf{Q}$.
>
> ---
>
> ### 2. The Logarithmic Derivative of $f_x(t)$
> Consider the formal power series with constant term 1:
> $$
> f_x(t) = \prod_{n \ge 1} (1 - x_n t^n) \in \mathbf{Z}[x_1, x_2, \dots][[t]].
> $$
> The formal logarithmic derivative $-t \frac{d}{dt} \log$ converts products into sums:
> $$
> -t \frac{d}{dt} \log f_x(t) = -t \frac{f_x'(t)}{f_x(t)} = \sum_{n=1}^\infty -t \frac{\frac{d}{dt}(1 - x_n t^n)}{1 - x_n t^n} = \sum_{n=1}^\infty \frac{n x_n t^n}{1 - x_n t^n}.
> $$
> Expanding each term as a geometric series:
> $$
> \frac{n x_n t^n}{1 - x_n t^n} = n x_n t^n \sum_{k=0}^\infty (x_n t^n)^k = \sum_{k=1}^\infty n x_n^k t^{n k}.
> $$
> Summing over all $n \ge 1$:
> $$
> -t \frac{d}{dt} \log f_x(t) = \sum_{n=1}^\infty \sum_{k=1}^\infty n x_n^k t^{nk}.
> $$
> In this double sum, let $m = nk$. Then $n$ is a divisor of $m$, and $k = m/n$.
> Collecting the coefficient of $t^m$:
> $$
> \sum_{m=1}^\infty \left( \sum_{n \mid m} n x_n^{m/n} \right) t^m = \sum_{m=1}^\infty x^{(m)} t^m.
> $$
> Renaming the summation variable to $n$ yields the exact identity:
> $$
> -t \frac{d}{dt} \log f_x(t) = \sum_{n \ge 1} x^{(n)} t^n.
> $$
>
> ---
>
> ### 3. Addition of Witt Vectors and Integrality of Polynomials
> For two Witt vectors $x$ and $y$, their sum $x + y$ is defined by addativity on ghost components:
> $$
> (x + y)^{(n)} = x^{(n)} + y^{(n)} \quad \text{for all } n \ge 1.
> $$
> Taking the generating functions:
> $$
> -t \frac{d}{dt} \log f_{x+y}(t) = \sum_{n \ge 1} (x+y)^{(n)} t^n = \sum_{n \ge 1} x^{(n)} t^n + \sum_{n \ge 1} y^{(n)} t^n = -t \frac{d}{dt} \log f_x(t) - t \frac{d}{dt} \log f_y(t).
> $$
> Since $-t \frac{d}{dt} \log(f_x(t) f_y(t)) = -t \frac{d}{dt} \log f_x(t) - t \frac{d}{dt} \log f_y(t)$, we have:
> $$
> -t \frac{d}{dt} \log f_{x+y}(t) = -t \frac{d}{dt} \log (f_x(t) f_y(t)).
> $$
> For any power series $g(t) = 1 + \sum_{n=1}^\infty c_n t^n$, the condition $-t \frac{d}{dt} \log g(t) = 0$ implies $g'(t) = 0$, so $g(t) = 1$.
> Therefore:
> $$
> f_{x+y}(t) = f_x(t) f_y(t).
> $$
>
> In terms of the infinite products:
> $$
> \prod_{n \ge 1} (1 - (x + y)_n t^n) = \left( \prod_{d \ge 1} (1 - x_d t^d) \right) \left( \prod_{e \ge 1} (1 - y_e t^e) \right).
> $$
> Every formal power series $h(t) \in 1 + t R[[t]]$ admits a unique factorisation as an infinite product $\prod_{n=1}^\infty (1 - c_n t^n)$ with $c_n \in R$:
> - At degree 1: $1 - (x+y)_1 t = (1 - x_1 t)(1 - y_1 t) = 1 - (x_1 + y_1) t \implies (x+y)_1 = x_1 + y_1$.
> - Inductively, expanding the product shows that $(x+y)_n$ is determined by the coefficient of $t^n$ in $f_x(t) f_y(t)$ modulo previous terms $(x+y)_d$ for $d < n$.
> Since $f_x(t) f_y(t)$ has integer coefficients in the polynomials $x_i, y_j$, each $(x+y)_n$ is a polynomial in $x_1, y_1, \dots, x_n, y_n$ with **integer coefficients**:
> $$
> S_n(x_1, \dots, x_n; y_1, \dots, y_n) \in \mathbf{Z}[x_1, \dots, x_n, y_1, \dots, y_n].
> $$
>
> ---
>
> ### 4. Multiplication of Witt Vectors
> On ghost components, product is defined by $(xy)^{(n)} = x^{(n)} y^{(n)}$.
> Consider the product:
> $$
> x^{(n)} y^{(n)} = \left( \sum_{d \mid n} d x_d^{n/d} \right) \left( \sum_{e \mid n} e y_e^{n/e} \right) = \sum_{d \mid n, \, e \mid n} de \, x_d^{n/d} y_e^{n/e}.
> $$
> For each pair $(d, e)$, let $m = \operatorname{lcm}(d, e)$.
> Then both $d \mid n$ and $e \mid n$ if and only if $m \mid n$.
> Thus:
> $$
> \sum_{n \ge 1} (xy)^{(n)} t^n = \sum_{d, e \ge 1} de \sum_{k=1}^\infty \left( x_d^{m/d} y_e^{m/e} \right)^k t^{m k} = \sum_{d, e \ge 1} \frac{de}{m} \cdot \frac{m (x_d^{m/d} y_e^{m/e}) t^m}{1 - x_d^{m/d} y_e^{m/e} t^m}.
> $$
> Integrating formally with $-t \frac{d}{dt} \log$:
> $$
> f_{xy}(t) = \prod_{d, e \ge 1} \left( 1 - x_d^{m/d} y_e^{m/e} t^m \right)^{de/m}.
> $$
> Note that $\frac{de}{m} = \frac{de}{\operatorname{lcm}(d, e)} = \gcd(d, e) \in \mathbf{Z}_{\ge 1}$ is an **integer**!
> Since the exponents $de/m$ are positive integers, each factor $(1 - x_d^{m/d} y_e^{m/e} t^m)^{de/m}$ is a polynomial with integer coefficients in $x_d, y_e$.
> By the same product factorization theorem, the Witt components $(xy)_n$ are polynomials with integer coefficients:
> $$
> P_n(x_1, \dots, x_n; y_1, \dots, y_n) \in \mathbf{Z}[x_1, \dots, x_n, y_1, \dots, y_n].
> $$
>
> ---
>
> ### 5. Functoriality of $W$
> Let $A$ be any commutative ring.
> Evaluating the universal polynomials $S_n$ and $P_n$ on vectors $x = (x_n)_{n \ge 1}, y = (y_n)_{n \ge 1} \in A^{\mathbf{N}}$ gives well-defined operations:
> $$
> (x + y)_n = S_n(x_1, \dots, x_n; y_1, \dots, y_n), \quad (xy)_n = P_n(x_1, \dots, x_n; y_1, \dots, y_n).
> $$
> The ring axioms (associativity, distributivity, commutativity, existence of $0 = (0, 0, \dots)$ and $1 = (1, 0, \dots)$) hold universally over $\mathbf{Z}[x_i, y_j, z_k]$, because they hold on ghost components, where the ghost component map $W(R) \to R^{\mathbf{N}}$ is injective when $R$ is a torsion-free $\mathbf{Z}$-algebra.
> Since $\mathbf{Z}[x_i, y_j, z_k]$ is torsion-free, the ring identities hold in the universal polynomial ring, and therefore specialize to any commutative ring $A$.
>
> Now let $\varphi: A \to A'$ be a ring homomorphism.
> Define $W(\varphi): W(A) \to W(A')$ by applying $\varphi$ componentwise:
> $$
> W(\varphi)(x_1, x_2, \dots) = (\varphi(x_1), \varphi(x_2), \dots).
> $$
> Since $S_n$ and $P_n$ have coefficients in $\mathbf{Z}$, and $\varphi$ is a ring homomorphism (so $\varphi(1) = 1$ and $\varphi$ preserves integer polynomial combinations):
> $$
> \varphi\left(S_n(x_1, \dots, x_n; y_1, \dots, y_n)\right) = S_n(\varphi(x_1), \dots, \varphi(x_n); \varphi(y_1), \dots, \varphi(y_n)),
> $$
> $$
> \varphi\left(P_n(x_1, \dots, x_n; y_1, \dots, y_n)\right) = P_n(\varphi(x_1), \dots, \varphi(x_n); \varphi(y_1), \dots, \varphi(y_n)).
> $$
> Thus $W(\varphi)(x + y) = W(\varphi)(x) + W(\varphi)(y)$ and $W(\varphi)(xy) = W(\varphi)(x) W(\varphi)(y)$.
> Furthermore, $W(\operatorname{id}_A) = \operatorname{id}_{W(A)}$ and $W(\psi \circ \varphi) = W(\psi) \circ W(\varphi)$.
> Therefore, $W$ is a **functor** from the category of commutative rings to itself.

## Related Concepts

- [[05 - Galois Theory/Concepts/Witt Vectors and Artin-Schreier-Witt Theory|Witt Vectors and Artin-Schreier-Witt Theory]]
- [[02 - Ring Theory/Concepts/Dirichlet Convolution and Mobius Inversion|Dirichlet Convolution and Mobius Inversion]]
- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]
- [[04 - Linear Algebra and Modules/Concepts/Hom Functor|Hom Functor]]

## Notes

- The construction using the formal power series $f_x(t) = \prod (1 - x_n t^n)$ realizes the ring of "big Witt vectors" $W(A)$ as the multiplicative group of formal power series $1 + t A[[t]]$ with constant term 1.
- In this realization, addition in $W(A)$ is ordinary multiplication of power series: $f_{x+y}(t) = f_x(t) f_y(t)$.
