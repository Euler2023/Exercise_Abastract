---
title: 'Exercise Gal162: Artin-Schreier-Witt Theory from Frobenius Minus One'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §3, Exercise 3, printed p. 283, PDF p. 302
source_refs:
- S4/ch-IV/sec-3/ex-3
created: '2026-10-23'
---

# Exercise Gal162: Artin-Schreier-Witt Theory from Frobenius Minus One

## Problem Statement

> [!question] Neukirch IV.3.3
> Show that the operator
> $$
> \wp:W_n(\bar k)\longrightarrow W_n(\bar k),\qquad\wp a=Fa-a,
> $$
> is a homomorphism with cyclic kernel $\mu_\wp$ of order $p^n$. Discuss the corresponding Kummer theory for the abelian extensions of exponent $p^n$.

## Hints

> [!hint]- Hint 1
> 特征 $p$ 下 Witt Frobenius 为坐标 $p$ 次幂，且是加法同态。固定坐标恰落在 $\mathbb F_p$ 中。

> [!hint]- Hint 2
> $W_n(\mathbb F_p)$ 的元素 $1$ 的加法阶为 $p^n$。求解 $Fa-a=b$ 可逐坐标解 $X^p-X=c$。

> [!hint]- Hint 3
> 前题验证了公理 (3.1)，故可逐项核对一般 Kummer 定理 (3.3) 的假设，再写出参数商及 pairing。

## Solution

> [!success]- Independent derivation
> 设 $\operatorname{char}k=p$，$\bar k=k^{sep}$。Witt Frobenius 在特征 $p$ 系数环上为 $F(a_0,\ldots,a_{n-1})=(a_0^p,\ldots,a_{n-1}^p)$，且为加法同态；所以 $\wp=F-1$ 为加法同态并与 Galois 作用交换。
>
> **核与满射。** $Fa=a$ 当且仅当每个坐标均在 $\mathbb F_p$ 中，故核为 $W_n(\mathbb F_p)$。在此环中 $p(a_0,a_1,\ldots)=(0,a_0,\ldots)$，故单位向量 $1=(1,0,\ldots)$ 的加法阶为 $p^n$。核共有 $p^n$ 个元素，所以由 $1$ 生成，$\mu_\wp\simeq\mathbb Z/p^n\mathbb Z$。
>
> 为解 $Fa-a=b$，首坐标满足 $a_0^p-a_0=b_0$。其余第 $i$ 个坐标依次具有形式
> $$
> a_i^p-a_i=b_i+P_i(a_0,\ldots,a_{i-1},b_0,\ldots,b_{i-1}),
> $$
> 其中 $P_i$ 来自 Witt 加减法的整系数三角多项式。每次右端已知，$X^p-X-c$ 的导数为 $-1$，在可分闭域 $\bar k$ 中有根，故可逐坐标求解。于是 $\wp$ 满射；此步骤不要求 $k$ 完美。
>
> **核对一般 Kummer 定理的假设。** $A=W_n(\bar k)$ 是连续加法 Galois 模；前题证明其对所有有限循环扩张满足 (3.1)。刚证明 $\wp$ 是满射、核为底域固定的循环群 $W_n(\mathbb F_p)$。因此可应用正文一般 Kummer 定理 (3.3)，其陈述及证明位于 [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §3, printed pp. 279–280, PDF pp. 298–299]。
>
> 对 $K\subseteq\bar k$，指数整除 $p^n$ 的 abelian 扩张与加法子群
> $$
> \wp W_n(K)\subseteq B\subseteq W_n(K)
> $$
> 一一对应，规则为 $L=K(\wp^{-1}B)$；这表示 adjoining 所有满足 $F\alpha-\alpha\in B$ 的 Witt 向量的全部坐标。反向为 $B=\wp W_n(L)\cap W_n(K)$。pairing 明确为
> $$
> G(L/K)\times B/\wp W_n(K)\longrightarrow\mathbb Z/p^n\mathbb Z,
> \qquad(\sigma,\bar b)\longmapsto\sigma(\alpha)-\alpha,\quad\wp\alpha=b.
> $$
> 换另一解只加固定核元素，换 $b$ 的代表只加来自 $W_n(K)$ 的向量，故 pairing 良定义。一般定理给出
> $$
> B/\wp W_n(K)\simeq\operatorname{Hom}_{cont}(G(L/K),\mathbb Z/p^n\mathbb Z).
> $$
> 有限扩张时两边为有限对偶群；无限时右边必须为连续字符。$n=1$ 恢复 $X^p-X=b$ 的 Artin–Schreier 理论。

## Related Concepts

- [[05 - Galois Theory/Concepts/Witt Vectors and Artin-Schreier-Witt Theory|Artin-Schreier-Witt Theory]]
- [[05 - Galois Theory/Concepts/Artin-Schreier Extensions|Artin-Schreier Extensions]]
- [[05 - Galois Theory/Concepts/Kummer Extensions|General Kummer Theory]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §3, Exercise 3, printed p. 283, PDF p. 302]. 独立核与满射证明；分类是对已在源书完整证明的一般算子 Kummer 定理的逐项应用。
- **Notation:** $\mu_\wp$ 为加法循环群 $W_n(\mathbb F_p)$，不是特征 $p$ 域中退化的乘法 $p^n$ 次单位根群。此处“exponent $p^n$”按正文习惯指指数整除 $p^n$。
